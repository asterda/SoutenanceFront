import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SalleComponent } from './salle/salle.component';
import {HttpClientModule} from "@angular/common/http";
import {SalleService} from "./salle.service";
import {ReactiveFormsModule} from "@angular/forms";
import { SallesComponent } from './salles/salles.component';
import {RouterModule, Routes} from "@angular/router";
import { SalleDeleteComponent } from './salle-delete/salle-delete.component';
import { SalleAjoutComponent } from './salle-ajout/salle-ajout.component';

const routes: Routes = [
  {path: 'admin/salles', component: SallesComponent},
  {path: 'admin/salles/ajout', component: SalleAjoutComponent},
  {path: 'admin/salles/edit/:code', component: SalleComponent},
  {path: 'admin/salles/delete/:code', component: SalleDeleteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SalleComponent,
    SallesComponent,
    SalleDeleteComponent,
    SalleAjoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
