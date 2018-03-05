import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Salle} from "../../model/Salle";
import {SalleService} from "../salle.service";

@Component({
  selector: 'app-salle-ajout',
  templateUrl: './salle-ajout.component.html',
  styleUrls: ['./salle-ajout.component.css']
})
export class SalleAjoutComponent implements OnInit {

  salleForm: FormGroup;
  salle: Salle = new Salle();

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm(this.salle);
  }

  createForm(salle: Salle) {
    this.salleForm = this.fb.group({
      code: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]{5,}$')
      ])],
      coutJour: [salle.coutJour, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ])],
      enPanneOuInutilisable: [salle.enPanneOuInutilisable, Validators.compose([
        Validators.required,
        Validators.pattern('^true|false$')
      ])],
      capacite: [salle.capacite, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ])],
      etage: [salle.etage, Validators.compose([
        Validators.required,
        Validators.pattern('^-?[0-9]$')
      ])]
    });
  }

  onSubmit() {
    this.salle = this.preparePersistSalle();
    this.salleService.create(this.salle).subscribe(
      salleNw => this.salle = salleNw,
      err => {},
      () => this.router.navigateByUrl('admin/salles')
    );
  }

  preparePersistSalle(): Salle {
    const formModel = this.salleForm.value;
    const sallePersist: Salle = {
      code: formModel.code as string,
      coutJour: formModel.coutJour as number,
      enPanneOuInutilisable: formModel.enPanneOuInutilisable as boolean,
      capacite: formModel.capacite as number,
      etage: formModel.etage as number
    }
    return sallePersist;
  }

}
