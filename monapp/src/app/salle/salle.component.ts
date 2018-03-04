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
  @Input() modePersistence: ModePersistence;
  salleForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    if(this.modePersistence == ModePersistence.CREATE){
      this.salle = new Salle();
    }
  }

  createForm() {
    this.salleForm = this.fb.group({
      code: [{value:'', disabled: true}, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])],
      coutJour: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ])],
      enPanneOuInutilisable: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^true|false$')
      ])],
      capacite: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ])],
      etage: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^-?[0-9]$')
      ])]
      });
  }

  onSubmit() {
    this.salle = this.preparePersistSalle();
    // ModePersistence
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.salleForm.reset({
      code: this.salle.code,
      coutJour: this.salle.coutJour,
      enPanneOuInutilisable: this.salle.enPanneOuInutilisable,
      capacite: this.salle.capacite,
      etage: this.salle.etage
    });
    if(this.modePersistence === ModePersistence.CREATE){
      this.salleForm.get('code').enable();
    }
  }

  preparePersistSalle(): Salle {
    const formModel = this.salleForm.value;
    let code: string;
    if(this.modePersistence === ModePersistence.UPDATE){
      code = this.salle.code;
    }else if(this.modePersistence === ModePersistence.CREATE){
      code = formModel.code as string;
    }
    console.log(code); // Pas formModel, car champ disabled
    console.log(formModel.coutJour as number);
    console.log(formModel.enPanneOuInutilisable as boolean);
    console.log(formModel.capacite as number);
    console.log(formModel.etage as number);
    /*
    const sallePersist: Salle = {

    };
    */


    return new Salle();
  }

}
