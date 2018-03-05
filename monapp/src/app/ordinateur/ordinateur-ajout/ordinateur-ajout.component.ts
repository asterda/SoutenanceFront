import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ordinateur} from "../../../model/Ordinateur";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdinateurService} from "../../ordinateur.service";
import {Salle} from "../../../model/Salle";

@Component({
  selector: 'app-ordinateur-ajout',
  templateUrl: './ordinateur-ajout.component.html',
  styleUrls: ['./ordinateur-ajout.component.css']
})
export class OrdinateurAjoutComponent implements OnInit {

  ordinateurForm: FormGroup;
  ordinateur: Ordinateur = new Ordinateur();

  constructor(
    private fb: FormBuilder,
    private ordinateurService: OrdinateurService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm(this.ordinateur);
  }

  createForm(ordinateur: Ordinateur) {
    this.ordinateurForm = this.fb.group({
      code: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9\-_]{4,}$')
      ])],
      coutJour: [ordinateur.coutJour, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ])],
      enPanneOuInutilisable: [ordinateur.enPanneOuInutilisable, Validators.compose([
        Validators.required,
        Validators.pattern('^true|false$')
      ])],
      processeur: [ordinateur.processeur, Validators.compose([
        Validators.required,
        Validators.pattern('^.{5,200}$')
      ])],
      ramGiga: [ordinateur.ramGiga, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$')
      ])],
      ddGiga: [ordinateur.ddGiga, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]{0,4}$')
      ])],
      dateAchat: [ordinateur.dateAchat, Validators.compose([
        Validators.required
      ])]
    });
  }

  onSubmit(){
    this.ordinateur = this.preparePersistOrdinateur();
    this.ordinateurService.create(this.ordinateur).subscribe(
      ordiNw => this.ordinateur = ordiNw,
      err => {},
      () => this.router.navigateByUrl('admin/ordinateurs')
    );
  }

  preparePersistOrdinateur(): Ordinateur {
    const formModel = this.ordinateurForm.value;
    const ordinateurPersist: Ordinateur = {
      code: formModel.code as string,
      coutJour: formModel.coutJour as number,
      enPanneOuInutilisable: formModel.enPanneOuInutilisable as boolean,
      processeur: formModel.processeur as string,
      ramGiga: formModel.ramGiga as number,
      ddGiga: formModel.ddGiga as number,
      dateAchat: formModel.dateAchat as Date
    }
    return ordinateurPersist;
  }

}
