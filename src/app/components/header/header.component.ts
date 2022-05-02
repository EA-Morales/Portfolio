import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// MODAL BANNER
import { ModalHeaderComponent } from './modal-header/modal-header.component';

// MATERIAL DIALOG
import { MatDialog } from '@angular/material/dialog';

// INTERFACE INFO PERSONAL
import { infoPersonal } from 'src/app/models/interfaceDatos';

// SERVICIO BANNER
import { BannerService } from './../../services/banner.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  infoPersonalform!: FormGroup;

  textoInfoPersonal: infoPersonal[] = [];

  isLoggedIn!: boolean;

  constructor(
    private authService: AuthService,
    private _dataSvc: BannerService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetInfo();
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  GetInfo() {
    this._dataSvc
      .getInfoPersonal()
      .subscribe(
        response => (this.textoInfoPersonal = Object.values(response))
      );
  }

  openDialog(texto: infoPersonal) {
    let dialogRef = this.dialog.open(ModalHeaderComponent, {
      height: '80vh',
      maxWidth: '500px',
      minWidth: '200px',
      width: '80vw',
      data: texto,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.GetInfo();
      this.cdr.detectChanges();
    });
  }
}
