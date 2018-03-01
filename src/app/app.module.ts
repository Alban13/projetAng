import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
      FormsModule //Nécessaire pour l'utilisation de ngSubmit et ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
