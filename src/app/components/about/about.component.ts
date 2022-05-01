// CORES
import { Component, OnInit } from '@angular/core';

// SERVICE Y MODAL
import { AboutService } from './../../services/about.service';
import { ModalAboutComponent } from './modal-about/modal-about.component';

// INTERFACE
import { descripcion } from 'src/app/models/interfaceDatos';

// DIALOGO ANGULAR MATERIAL
import { MatDialog } from '@angular/material/dialog';

// SERVICIO AUTH
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isLoggedIn!: boolean;

  texto!: descripcion[];

  constructor(
    private authService: AuthService,
    private _dataSvc: AboutService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
    this._dataSvc
      .getTextAbout()
      .subscribe(response => (this.texto = Object.values(response)));
  }

  GetAbout() {
    this._dataSvc
      .getTextAbout()
      .subscribe(response => (this.texto = Object.values(response)));
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalAboutComponent, {
      width: '35vw',
      data: 'componente about',
    });

    dialogRef.afterClosed().subscribe(res => {
      this.GetAbout();
    });
  }
}
