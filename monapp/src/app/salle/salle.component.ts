import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Salle} from "../../model/Salle";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModePersistence} from "../../model/ModePersistence";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit, OnChanges {

  @Input() salle: Salle;
  salleForm: FormGroup;
  @Input() modePersistence: ModePersistence;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.salleForm = this.fb.group({
      code: [
        '',
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ],
      coutJour: [
        '',
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ],
      enPanneOuInutilisable: [
        '',
        Validators.required,
        Validators.pattern('^true|false$')
      ],
      capacite: [
        '',
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ],
      etage: [
        '',
        Validators.required,
        Validators.pattern('^-?[0-9]$')
      ]
      });
  }

  onSubmit() {
    // ModePersistence
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
