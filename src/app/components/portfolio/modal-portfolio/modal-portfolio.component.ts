// Angular Cores
import { Component, OnInit, Inject } from '@angular/core';

// Servicio Proyectos
import { PortfolioService } from 'src/app/services/portfolio.service';

// FORMULARIOS
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// ANGULAR MATERIAL DIALOG
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// INTERFACE PROYECTOS
import { proyects } from 'src/app/models/interfaceDatos';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.scss'],
})
export class ModalPortfolioComponent implements OnInit {
  proyectsform!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: proyects,
    private readonly fb: FormBuilder,
    private _dataSvc: PortfolioService
  ) {}

  ngOnInit(): void {
    this.proyectsform = this.initProyectsForm();

    this.proyectsform.patchValue({
      img: this.data.img,
      titulo: this.data.titulo,
      descripcion: this.data.descripcion,
      link: this.data.link,
    });
  }

  initProyectsForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(''),
      img: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
    });
  }

  get errorImg() {
    return this.proyectsform.get('img');
  }

  get errorTitulo() {
    return this.proyectsform.get('titulo');
  }

  get errorDescripcion() {
    return this.proyectsform.get('descripcion');
  }

  get errorLink() {
    return this.proyectsform.get('link');
  }

  onSubmitProyects() {
    if (this.data.id > 0) {
      this._dataSvc
        .editproyects(this.proyectsform.value, this.data.id)
        .subscribe();
    } else {
      this._dataSvc.addproyects(this.proyectsform.value).subscribe();
    }
  }
}
