import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Salle} from "../../model/Salle";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SalleService} from "../salle.service";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit, OnChanges {

  @Input() salle: Salle;
  salleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.salleForm = this.fb.group({
      code: '',     // rajouter validateurs pour tous les champs
      coutJour: '',
      enPanneOuInutilisable: '',
      capacite: '',
      etage: ''
      });
  }

  onSubmit() {

  }

  ngOnChanges() {
    this.salleForm.reset({
      code: this.salle.code,
      coutJour: this.salle.coutJour,
      enPanneOuInutilisable: this.salle.enPanneOuInutilisable,
      capacite: this.salle.capacite,
      etage: this.salle.etage
    });
  }

}
