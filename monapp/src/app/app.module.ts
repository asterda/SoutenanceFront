import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SalleComponent } from './salle/salle.component';
import {HttpClientModule} from "@angular/common/http";
import {SalleService} from "./salle.service";
import {ReactiveFormsModule} from "@angular/forms";
import { SallesComponent } from './salles/salles.component';


@NgModule({
  declarations: [
    AppComponent,
    SalleComponent,
    SallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
