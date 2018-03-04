import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Salle} from "../../model/Salle";
import {SalleService} from "../salle.service";
import 'rxjs/add/operator/finally';
import {ModePersistence} from "../../model/ModePersistence";

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  salles: Observable<Salle[]>;
  isLoading = false;
  selectedSalle: Salle;
  nouvelleSalle = new Salle();
  create = ModePersistence.CREATE;
  update = ModePersistence.UPDATE;

  constructor(
    private salleService: SalleService
  ) { }

  ngOnInit() {
    this.getSalles();
  }

  getSalles(){
    this.isLoading = true;
    this.salles = this.salleService.findAll()
      .finally(() => this.isLoading = false);
  }

  select(salle: Salle) {
    this.selectedSalle = salle;
  }

}
