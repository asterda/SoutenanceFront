import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ordinateur} from "../../../model/Ordinateur";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdinateurService} from "../../ordinateur.service";

@Component({
  selector: 'app-ordinateur-update',
  templateUrl: './ordinateur-update.component.html',
  styleUrls: ['./ordinateur-update.component.css']
})
export class OrdinateurUpdateComponent implements OnInit {

  code: string;
  ordinateurForm: FormGroup;
  ordinateur: Ordinateur;

  constructor(
    private fb: FormBuilder,
    private ordinateurService: OrdinateurService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.ordinateurService.findOne(this.code).subscribe(ordinateur => {
        this.ordinateur = ordinateur;
        this.createForm(this.ordinateur);
      });
    });
  }

  ngOnInit() {
  }

  createForm(ordinateur: Ordinateur) {
    this.ordinateurForm = this.fb.group({
      code: [{value: ordinateur.code, disabled: true}, Validators.compose([
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

  onSubmit() {
    this.ordinateur = this.preparePersistOrdinateur();
    this.ordinateur.code = this.code; // undefined car disabled
    this.ordinateurService.update(this.ordinateur).subscribe(
      ordinateurUp => this.ordinateur = ordinateurUp,
      err => {},
      () => this.router.navigateByUrl('admin/ordinateurs')
    );
  }

  preparePersistOrdinateur(): Ordinateur {
    const formModel = this.ordinateurForm.value;
    let code: string;
    const ordinateurPersist: Ordinateur = {
      code: code,
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
