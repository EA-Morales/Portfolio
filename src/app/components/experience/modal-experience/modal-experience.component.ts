import { ExperienceService } from './../../../services/experience.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { datos } from 'src/app/models/interfaceDatos';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.scss'],
})
export class ModalExperienceComponent implements OnInit {
  experienciaForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: datos,
    private readonly fb: FormBuilder,
    private _dataSvc: ExperienceService
  ) {}

  ngOnInit(): void {
    this.experienciaForm = this.initExperienciaForm();

    this.experienciaForm.patchValue({
      establecimiento: this.data.establecimiento,
      especialidad: this.data.especialidad,
      year: this.data.year,
    });
  }

  initExperienciaForm(): FormGroup {
    return this.fb.group({
      id: [],
      establecimiento: [],
      especialidad: [],
      year: [],
    });
  }

  onSubmitExperiencia() {
    if (this.data.id > 0) {
      this._dataSvc
        .editExperiencia(this.experienciaForm.value, this.data.id)
        .subscribe();
    } else {
      this._dataSvc.addExperiencia(this.experienciaForm.value).subscribe();
    }
  }
}
