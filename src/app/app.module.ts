import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//reactive forms
import { ReactiveFormsModule } from '@angular/forms';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//swiper
import { SwiperModule } from 'swiper/angular';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    ReactiveFormsModule,
  ],
  exports: [SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
