import { Component, OnInit } from '@angular/core';
import {Videoprojecteur} from '../../../model/Videoprojecteur'
import {VideoprojecteurService} from "../../services/videoprojecteur.service";


@Component({
  selector: 'app-videoprojecteur-liste',
  templateUrl: './videoprojecteur-liste.component.html',
  styleUrls: ['./videoprojecteur-liste.component.css']
})
export class VideoprojecteurListeComponent implements OnInit {

  isLoading = true;
  videoprojecteurs: Videoprojecteur[];

  constructor(
    private videoprojecteurService: VideoprojecteurService
  ) { }

  ngOnInit() {
    this.videoprojecteurService.findAll().subscribe(
      videoprojecteurs => this.videoprojecteurs = videoprojecteurs,
      err => {/* gérer erreurs */},
      () => this.isLoading = false
    );
  }

}
