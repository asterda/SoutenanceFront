import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrdinateurService} from "../../ordinateur.service";

@Component({
  selector: 'app-ordinateur-delete',
  templateUrl: './ordinateur-delete.component.html',
  styleUrls: ['./ordinateur-delete.component.css']
})
export class OrdinateurDeleteComponent implements OnInit {

  code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordinateurService: OrdinateurService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.code = params['code'];
        this.ordinateurService.delete(this.code).subscribe(
          reponse => {
            console.log('enregistrement supprimé');
          },
          err => {},
          () => this.router.navigateByUrl('admin/ordinateurs')
        );
      }
    );
  }

}
