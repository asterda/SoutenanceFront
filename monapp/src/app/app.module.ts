import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AjoutSalleComponent } from './ajout-salle/ajout-salle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SallesComponent } from './salles/salles.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent}, // à modifier
  {path: 'salles/ajout', component: AjoutSalleComponent},
  /*
  {
    path: 'salles',
    component: SallesComponent,
    children: [
      {path: 'ajout', component: AjoutSalleComponent}
    ]
  },*/
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AjoutSalleComponent,
    NotFoundComponent,
    SallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
