import { BannerService } from './../../../services/banner.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { infoPersonal } from 'src/app/models/interfaceDatos';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  infopersonalform!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: infoPersonal,
    private readonly fb: FormBuilder,
    private _dataSvc: BannerService
  ) {}

  ngOnInit(): void {
    this.infopersonalform = this.datosform();

    this.infopersonalform.patchValue({
      nombreyapellido: this.data.nombreyapellido,
      puesto: this.data.puesto,
      ubicacion: this.data.ubicacion,
    });
  }

  datosform(): FormGroup {
    return this.fb.group({
      id: [1],
      nombreyapellido: new FormControl('', [Validators.required]),
      puesto: new FormControl('', [Validators.required]),
      ubicacion: new FormControl('', [Validators.required]),
    });
  }

  get errorNombreyApellido() {
    return this.infopersonalform.get('nombreyapellido');
  }

  get errorPuesto() {
    return this.infopersonalform.get('puesto');
  }

  get errorUbicacion() {
    return this.infopersonalform.get('ubicacion');
  }

  onSubmitDatos() {
    this._dataSvc.addinfoPersonal(this.infopersonalform.value).subscribe();
  }
}
