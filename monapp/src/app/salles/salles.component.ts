import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Salle} from "../../model/Salle";
import {SalleService} from "../salle.service";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delay';
import {ModePersistence} from "../../model/ModePersistence";

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  isLoading = true;
  salles: Salle[];

  constructor(
    private salleService: SalleService
  ) { }

  ngOnInit() {
    this.salleService.findAll().subscribe(
      salles => this.salles = salles,
      err => {/* gérer erreurs */},
      () => this.isLoading = false
    );
  }

}
