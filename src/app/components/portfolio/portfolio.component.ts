// Core modules
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Componentes y Service
import { ModalPortfolioComponent } from './modal-portfolio/modal-portfolio.component';

// Interface
import { proyects } from 'src/app/models/interfaceDatos';

// Matdialog
import { MatDialog } from '@angular/material/dialog';

// Change detection
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

//Swiper
// import { SwiperComponent } from 'swiper/angular';
import { Navigation, Pagination, SwiperOptions } from 'swiper';
import Swiper from 'swiper';
import { PortfolioService } from 'src/app/services/portfolio.service';

//import { Cards } from './../../mock-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  isLoggedIn!: boolean;

  prueba: proyects[] = [];

  temporal: proyects[] = [];

  //portfolios = Cards;

  // SWIPER CONFIG
  public swiperConfig: SwiperOptions = {
    pagination: true,
    spaceBetween: 15,
    centeredSlides: true,
  };

  // SWIPER CONFIG

  constructor(
    private authService: AuthService,
    private _dataSvc: PortfolioService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    });
    this.getProyects();

    Swiper.use([Pagination, Navigation]);
  }

  getProyects(): any {
    this._dataSvc
      .getProyects()
      .subscribe(Response => (this.prueba = Object.values(Response)));
  }

  edit(proyect: proyects) {
    let dialogRef = this.dialog.open(ModalPortfolioComponent, {
      height: 'fit',
      maxWidth: '500px',
      minWidth: '200px',
      width: '80vw',
      data: proyect,
    });

    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
      this.cdr.detectChanges();
    });
  }

  delete(proyect: proyects) {
    this._dataSvc
      .deleteProyect(proyect.id)
      .subscribe(Response => this.ngOnInit());
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalPortfolioComponent, {
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
