import { Component, OnInit } from '@angular/core';
import {Formateur} from "../../../model/Formateur";
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-formateur-liste',
  templateUrl: './formateur-liste.component.html',
  styleUrls: ['./formateur-liste.component.css']
})
export class FormateurListeComponent implements OnInit {

  isLoading = true;
  formateurs: Formateur[];

  constructor(
    private formateurService: FormateurService
  ) { }

  ngOnInit() {
    this.formateurService.findAll().subscribe(
      ordis => this.formateurs = ordis,
      err => {/* gérer erreurs */},
      () => this.isLoading = false
    );
  }

}
