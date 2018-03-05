import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SalleUpdateComponent } from './salle/salle-update/salle-update.component';
import {HttpClientModule} from "@angular/common/http";
import {SalleService} from "./salle.service";
import {ReactiveFormsModule} from "@angular/forms";
import {SalleListeComponent} from './salle//salle-liste/salle-liste.component';
import {RouterModule, Routes} from "@angular/router";
import { SalleDeleteComponent } from './salle//salle-delete/salle-delete.component';
import { SalleAjoutComponent } from './salle//salle-ajout/salle-ajout.component';

const routes: Routes = [
  {path: 'admin/salles', component: SalleListeComponent},
  {path: 'admin/salles/ajout', component: SalleAjoutComponent},
  {path: 'admin/salles/edit/:code', component: SalleUpdateComponent},
  {path: 'admin/salles/delete/:code', component: SalleDeleteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SalleUpdateComponent,
    SalleListeComponent,
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
