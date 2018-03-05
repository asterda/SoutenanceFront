import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Salle} from "../../model/Salle";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModePersistence} from "../../model/ModePersistence";
import {SalleService} from "../salle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit, OnChanges {

  @Input() salle: Salle;
  @Input() modePersistence: ModePersistence;
  salleForm: FormGroup;

  @Output() dbChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
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
    if(this.modePersistence === ModePersistence.UPDATE){
      this.salleService.update(this.salle).subscribe(/* gerer erreur */);
    }else if(this.modePersistence === ModePersistence.CREATE){
      this.salleService.create(this.salle).subscribe(/* gerer erreur */);
      this.modePersistence = ModePersistence.UPDATE;
    }
    this.ngOnChanges();
    this.dbChanged.emit();
  }

  ngOnChanges() { // Regarde si des @Input ont été modifiés (ici salle et modePersistence)
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
    const sallePersist: Salle = {
      code: code,
      coutJour: formModel.coutJour as number,
      enPanneOuInutilisable: formModel.enPanneOuInutilisable as boolean,
      capacite: formModel.capacite as number,
      etage: formModel.etage as number
    }
    return sallePersist;
  }

}
