// Core Modules
import { Component, OnInit } from '@angular/core';

// Service y componente
import { EducationService } from './../../services/education.service';
import { ModalEducationComponent } from './modal-education/modal-education.component';

// Interface
import { datos } from 'src/app/models/interfaceDatos';

// Matdialog
import { MatDialog } from '@angular/material/dialog';

// Change detection
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  isLoggedIn!: boolean;

  prueba: datos[] = [];

  temporal!: datos;

  constructor(
    private authService: AuthService,
    private _dataSvc: EducationService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
      console.log(res);
    });
    this.getEducacion();
  }

  getEducacion(): any {
    this._dataSvc
      .getEducacion()
      .subscribe(response => (this.prueba = Object.values(response)));
  }

  edit(dato: datos) {
    let dialogRef = this.dialog.open(ModalEducationComponent, {
      data: dato,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
      this.cdr.detectChanges();
    });
  }

  delete(dato: datos) {
    this._dataSvc.deleteEducacion(dato.id).subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalEducationComponent, {
      data: {
        view: 'componente experiencia',
        objeto: this.temporal,
      },
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });

    console.log(this.prueba);
  }
}
