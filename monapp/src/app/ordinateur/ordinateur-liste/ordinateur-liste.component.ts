import { Component, OnInit } from '@angular/core';
import {Ordinateur} from "../../../model/Ordinateur";
import {OrdinateurService} from "../../services/ordinateur.service";

@Component({
  selector: 'app-ordinateur-liste',
  templateUrl: './ordinateur-liste.component.html',
  styleUrls: ['./ordinateur-liste.component.css']
})
export class OrdinateurListeComponent implements OnInit {

  isLoading = true;
  ordinateurs: Ordinateur[];

  constructor(
    private ordinateurService: OrdinateurService
  ) { }

  ngOnInit() {
    this.ordinateurService.findAll().subscribe(
      ordis => this.ordinateurs = ordis,
      err => {/* gérer erreurs */},
      () => this.isLoading = false
    );
  }

}
