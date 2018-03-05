import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SalleService} from "../salle.service";

@Component({
  selector: 'app-salle-delete',
  templateUrl: './salle-delete.component.html',
  styleUrls: ['./salle-delete.component.css']
})
export class SalleDeleteComponent implements OnInit {

  code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salleService: SalleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.code = params['code'];
        this.salleService.delete(this.code).subscribe(
          reponse => {
            console.log('enregistrement supprimé');
          },
          err => {},
          () => this.router.navigateByUrl('admin/salles')
        );
      }
    );
  }

}
