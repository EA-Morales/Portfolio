// Angular Cores
import { Component, Inject, OnInit } from '@angular/core';

// SERVICIO EDUCACION
import { EducationService } from './../../../services/education.service';

// FORMULARIOS
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// ANGULAR MATERIAL DIALOG
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// INTERFACE DATOS
import { datos } from 'src/app/models/interfaceDatos';
@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.scss'],
})
export class ModalEducationComponent implements OnInit {
  educacionform!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: datos,
    private readonly fb: FormBuilder,
    private _dataSvc: EducationService
  ) {}

  ngOnInit(): void {
    this.educacionform = this.initEducacionForm();

    this.educacionform.patchValue({
      establecimiento: this.data.establecimiento,
      especialidad: this.data.especialidad,
      year: this.data.year,
    });
  }

  initEducacionForm(): FormGroup {
    return this.fb.group({
      id: new FormControl(''),
      establecimiento: new FormControl('', [Validators.required]),
      especialidad: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  get errorEstablecimiento() {
    return this.educacionform.get('establecimiento');
  }

  get errorEspecialidad() {
    return this.educacionform.get('especialidad');
  }

  get errorYear() {
    return this.educacionform.get('year');
  }

  onSubmitEducacion() {
    if (this.data.id > 0) {
      this._dataSvc
        .editEducacion(this.educacionform.value, this.data.id)
        .subscribe();
    } else {
      this._dataSvc.addEducacion(this.educacionform.value).subscribe();
    }
  }
}
