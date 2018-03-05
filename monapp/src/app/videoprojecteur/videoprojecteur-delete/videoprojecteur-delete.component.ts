import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VideoprojecteurService} from "../../services/videoprojecteur.service";

@Component({
  selector: 'app-videoprojecteur-delete',
  templateUrl: './videoprojecteur-delete.component.html',
  styleUrls: ['./videoprojecteur-delete.component.css']
})
export class VideoprojecteurDeleteComponent implements OnInit {

  code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoprojecteurService: VideoprojecteurService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.code = params['code'];
        this.videoprojecteurService.delete(this.code).subscribe(
          reponse => {
            console.log('enregistrement supprimé');
          },
          err => {},
          () => this.router.navigateByUrl('admin/videoprojecteurs')
        );
      }
    );
  }


}
