import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  mostrarEducacion: boolean = true;
  mostrarExperiencia: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showEducation(): void {
    if (this.mostrarEducacion === false) {
      this.mostrarEducacion = true;
      this.mostrarExperiencia = false;
    }
  }

  showExperience(): void {
    if (this.mostrarExperiencia === false) {
      this.mostrarExperiencia = true;
      this.mostrarEducacion = false;
    }
  }
}
