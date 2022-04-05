import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Components
import { MatMenuModule } from '@angular/material/menu';

// Components of my webpage
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

// Swiper for JS
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    EducationComponent,
    LoginComponent,
  ],
  imports: [CommonModule, SwiperModule, MatMenuModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    EducationComponent,
    LoginComponent,
  ],
})
export class ComponentsModule {}
