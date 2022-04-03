import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//reactive forms
import { ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// App component
import { AppComponent } from './app.component';

// Module of my webcomponents
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
