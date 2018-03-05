import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Videoprojecteur} from "../../../model/Videoprojecteur";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoprojecteurService} from "../../services/videoprojecteur.service";

@Component({
  selector: 'app-videoprojecteur-ajout',
  templateUrl: './videoprojecteur-ajout.component.html',
  styleUrls: ['./videoprojecteur-ajout.component.css']
})
export class VideoprojecteurAjoutComponent implements OnInit {

  videoprojecteurForm: FormGroup;
  videoprojecteur: Videoprojecteur = new Videoprojecteur();

  constructor(
    private fb: FormBuilder,
    private videoprojecteurService: VideoprojecteurService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm(this.videoprojecteur);
  }

  createForm(videoprojecteur: Videoprojecteur) {
    this.videoprojecteurForm = this.fb.group({
      code: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]{5,}$')
      ])],
      coutJour: [videoprojecteur.coutJour, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ])],
      enPanneOuInutilisable: [videoprojecteur.enPanneOuInutilisable, Validators.compose([
        Validators.required,
        Validators.pattern('^true|false$')
      ])]
    });
  }

  onSubmit() {
    this.videoprojecteur = this.preparePersistVideoprojecteur();
    this.videoprojecteurService.create(this.videoprojecteur).subscribe(
      videoprojecteurNw => this.videoprojecteur = videoprojecteurNw,
      err => {},
      () => this.router.navigateByUrl('admin/videoprojecteurs')
    );
  }

  preparePersistVideoprojecteur(): Videoprojecteur {
    const formModel = this.videoprojecteurForm.value;
    const videoprojecteurPersist: Videoprojecteur = {
      code: formModel.code as string,
      coutJour: formModel.coutJour as number,
      enPanneOuInutilisable: formModel.enPanneOuInutilisable as boolean,
    }
    return videoprojecteurPersist;
  }

}
