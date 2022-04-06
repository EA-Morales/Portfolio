// import { AuthInterceptor } from './services/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulo de componentes
import { ComponentsModule } from './components/components.module';

//Modulo Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
