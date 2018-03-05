import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormateurService} from "../../formateur.service";
import {Formateur} from "../../../model/Formateur";

@Component({
  selector: 'app-formateur-update',
  templateUrl: './formateur-update.component.html',
  styleUrls: ['./formateur-update.component.css']
})
export class FormateurUpdateComponent implements OnInit {

  id: string;
  formateurForm: FormGroup;
  formateur: Formateur = new Formateur();

  constructor(
    private fb: FormBuilder,
    private formateurService: FormateurService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.formateurService.findOne(this.id).subscribe(f => {
        this.formateur = f;
        this.createForm(this.formateur);
      });
    });
  }

  ngOnInit() {
    this.createForm(this.formateur);
  }

  createForm(formateur: Formateur) {
    this.formateurForm = this.fb.group({
      id: [{value: formateur.id, disabled: true}],
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
    this.formateurService.update(this.formateur).subscribe(
      formNw => this.formateur = formNw,
      err => {},
      () => this.router.navigateByUrl('admin/formateurs')
    );
  }

  preparePersistFormateur(): Formateur {
    const formModel = this.formateurForm.value;
    const formateurPersist: Formateur = {
      id: +this.id as number, // Nb : + == opérateur raccourci de conversion str to int (parseInt)
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
