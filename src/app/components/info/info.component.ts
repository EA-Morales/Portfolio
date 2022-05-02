import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  mostrarEducacion: boolean = true;
  mostrarExperiencia: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showEducacion() {
    if (this.mostrarEducacion === false) {
      this.mostrarEducacion = true;
      this.mostrarExperiencia = false;
    }
  }

  showExperiencia() {
    if (this.mostrarExperiencia === false) {
      this.mostrarExperiencia = true;
      this.mostrarEducacion = false;
    }
  }
}
