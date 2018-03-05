import {Component, OnInit} from '@angular/core';
import {Salle} from "../../../model/Salle";
import {SalleService} from "../../salle.service";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-salles',
  templateUrl: './salle-liste.component.html',
  styleUrls: ['./salle-liste.component.css']
})
export class SalleListeComponent implements OnInit {

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
