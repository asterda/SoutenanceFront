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
import { OrdinateurListeComponent } from './ordinateur/ordinateur-liste/ordinateur-liste.component';
import {OrdinateurService} from "./ordinateur.service";
import { OrdinateurAjoutComponent } from './ordinateur/ordinateur-ajout/ordinateur-ajout.component';
import { OrdinateurUpdateComponent } from './ordinateur/ordinateur-update/ordinateur-update.component';
import { OrdinateurDeleteComponent } from './ordinateur/ordinateur-delete/ordinateur-delete.component';
import {FormateurService} from "./formateur.service";

const routes: Routes = [
  // ADMIN
    // Salle
  {path: 'admin/salles', component: SalleListeComponent},
  {path: 'admin/salles/ajout', component: SalleAjoutComponent},
  {path: 'admin/salles/edit/:code', component: SalleUpdateComponent},
  {path: 'admin/salles/delete/:code', component: SalleDeleteComponent},

    // Ordinateur
  {path: 'admin/ordinateurs', component: OrdinateurListeComponent},
  {path: 'admin/ordinateurs/ajout', component: OrdinateurAjoutComponent},
  {path: 'admin/ordinateurs/edit/:code', component: OrdinateurUpdateComponent},
  {path: 'admin/ordinateurs/delete/:code', component: OrdinateurDeleteComponent},

  // FORMATEURS
//  {path: 'admin/formateurs', component: FormateurListeComponent},
//  {path: 'admin/formateurs/ajout', component: FormateurAjoutComponent},
//  {path: 'admin/formateurs/edit/:code', component: FormateurUpdateComponent},
//  {path: 'admin/formateurs/delete/:code', component: FormateurDeleteComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SalleUpdateComponent,
    SalleListeComponent,
    SalleDeleteComponent,
    SalleAjoutComponent,
    OrdinateurListeComponent,
    OrdinateurAjoutComponent,
    OrdinateurUpdateComponent,
    OrdinateurDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SalleService,
    OrdinateurService,
    FormateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
