import {Portfolio} from './../../portfolio';
import {Cards} from './../../mock-portfolio';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

//Formularios
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

//Swiper
import {SwiperComponent} from 'swiper/angular';
import SwiperCore, {Navigation, Pagination, SwiperOptions} from 'swiper';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  public swiperConfig: SwiperOptions = {
    pagination: true,
    spaceBetween: 15,
    centeredSlides: true,
  };

  portfolios = Cards;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: Number,
      title: '',
      description: '',
      img: '',
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    Swiper.use([Pagination, Navigation]);
  }
}
