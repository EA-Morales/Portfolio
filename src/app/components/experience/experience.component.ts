import { Component, OnInit } from '@angular/core';

// Componentes y service
import { ModalExperienceComponent } from './modal-experience/modal-experience.component';
import { ExperienceService } from './../../services/experience.service';

// Interface
import { datos } from 'src/app/models/interfaceDatos';

// Matdialog
import { MatDialog } from '@angular/material/dialog';

// Change detection
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  isLoggedIn!: boolean;

  prueba: datos[] = [];

  temporal!: datos;

  constructor(
    private authService: AuthService,
    private _dataSvc: ExperienceService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
      //console.log(res);
    });
    this.getExperiencia();
  }

  getExperiencia(): any {
    this._dataSvc
      .getExperiencia()
      .subscribe(response => (this.prueba = Object.values(response)));
  }

  edit(dato: datos) {
    let dialogRef = this.dialog.open(ModalExperienceComponent, {
      height: 'fit',
      maxWidth: '500px',
      minWidth: '200px',
      width: '80vw',
      data: dato,
    });

    dialogRef.afterClosed().subscribe(res => {
      //console.log('se cerro el modal');
      this.ngOnInit();
      this.cdr.detectChanges();
    });
  }

  delete(dato: datos) {
    //console.log(dato.id);
    this._dataSvc.deleteExperiencia(dato.id).subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalExperienceComponent, {
      height: 'fit',
      maxWidth: '500px',
      minWidth: '200px',
      width: '80vw',
      data: this.prueba,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }
}
