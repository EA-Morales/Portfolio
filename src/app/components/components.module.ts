import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTES
import { AppRoutingModule } from '../app-routing.module';

// FORMULARIOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Components
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

// Components of my webpage
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ModalPortfolioComponent } from './portfolio/modal-portfolio/modal-portfolio.component';
import { ModalAboutComponent } from './about/modal-about/modal-about.component';
import { ModalHeaderComponent } from './header/modal-header/modal-header.component';
import { ModalEducationComponent } from './education/modal-education/modal-education.component';
import { ModalExperienceComponent } from './experience/modal-experience/modal-experience.component';
import { ModalSkillsComponent } from './skills/modal-skills/modal-skills.component';

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
    ModalPortfolioComponent,
    ModalAboutComponent,
    ModalHeaderComponent,
    InfoComponent,
    ExperienceComponent,
    ModalEducationComponent,
    ModalExperienceComponent,
    SkillsComponent,
    ModalSkillsComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    EducationComponent,
    LoginComponent,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    InfoComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
