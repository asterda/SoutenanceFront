import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SalleService} from "../salle.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajout-salle',
  templateUrl: './ajout-salle.component.html',
  styleUrls: ['./ajout-salle.component.css']
})
export class AjoutSalleComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
