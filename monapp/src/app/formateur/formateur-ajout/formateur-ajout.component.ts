import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formateur} from "../../../model/Formateur";
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-formateur-ajout',
  templateUrl: './formateur-ajout.component.html',
  styleUrls: ['./formateur-ajout.component.css']
})
export class FormateurAjoutComponent implements OnInit {

  formateurForm: FormGroup;
  formateur: Formateur = new Formateur();

  constructor(
    private fb: FormBuilder,
    private formateurService: FormateurService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm(this.formateur);
  }

  createForm(formateur: Formateur) {
    this.formateurForm = this.fb.group({
      id: [{value: '', disabled: true}],
      nom: [formateur.nom, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z-]+?$')
      ])],
      prenom: [formateur.prenom, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z-]+?$')
      ])],
      codePostal: [formateur.codePostal, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{5}')
      ])],
      rue: [formateur.rue, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Zéèêîûôë\. ]+$')
      ])],
      ville: [formateur.ville, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Zéèêîûôë\. -]+$')
      ])],
      telephoneFixe: [formateur.telephoneFixe, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])],
      telephoneMobile: [formateur.telephoneMobile, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])],
      email: [formateur.email, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z_\.]+@[a-zA-Z]+\.(com|fr|org)$')
      ])]
    });
  }

  onSubmit(){
    this.formateur = this.preparePersistFormateur();
    this.formateurService.create(this.formateur).subscribe(
      formNw => this.formateur = formNw,
      err => {},
      () => this.router.navigateByUrl('admin/formateurs')
    );
  }

  preparePersistFormateur(): Formateur {
    const formModel = this.formateurForm.value;
    const formateurPersist: Formateur = {
      nom: formModel.nom as string,
      prenom: formModel.prenom as string,
      codePostal: formModel.codePostal as string,
      rue: formModel.rue as string,
      ville: formModel.ville as string,
      telephoneFixe: formModel.telephoneFixe as string,
      telephoneMobile: formModel.telephoneMobile as string,
      email: formModel.email as string
    }
    return formateurPersist;
  }

}
