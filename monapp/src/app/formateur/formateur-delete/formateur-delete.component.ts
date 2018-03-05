import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormateurService} from "../../formateur.service";

@Component({
  selector: 'app-formateur-delete',
  templateUrl: './formateur-delete.component.html',
  styleUrls: ['./formateur-delete.component.css']
})
export class FormateurDeleteComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formateurService: FormateurService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.formateurService.delete(this.id).subscribe(
          reponse => {},
          err => {},
          () => this.router.navigateByUrl('admin/formateurs')
        );
      }
    );
  }

}
