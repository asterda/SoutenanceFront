import { Component, OnInit } from '@angular/core';
import {Videoprojecteur} from "../../../model/Videoprojecteur";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoprojecteurService} from "../../services/videoprojecteur.service";

@Component({
  selector: 'app-videoprojecteur-update',
  templateUrl: './videoprojecteur-update.component.html',
  styleUrls: ['./videoprojecteur-update.component.css']
})
export class VideoprojecteurUpdateComponent implements OnInit {

  code: string;
  videoprojecteurForm: FormGroup;
  videoprojecteur: Videoprojecteur;

  constructor(
    private fb: FormBuilder,
    private videoprojecteurService: VideoprojecteurService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.videoprojecteurService.findOne(this.code).subscribe(videoprojecteur => {
        this.videoprojecteur = videoprojecteur;
        this.createForm(this.videoprojecteur);
      });
    });
  }

  ngOnInit() { }

  createForm(videoprojecteur: Videoprojecteur) {
    this.videoprojecteurForm = this.fb.group({
      code: [{value: videoprojecteur.code, disabled: true}, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
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
    this.videoprojecteur.code = this.code; // undefined car disabled
    this.videoprojecteurService.update(this.videoprojecteur).subscribe(
      videoprojecteurUp => this.videoprojecteur = videoprojecteurUp,
      err => {},
      () => this.router.navigateByUrl('admin/videoprojecteurs')
    );
  }

  preparePersistVideoprojecteur(): Videoprojecteur {
    const formModel = this.videoprojecteurForm.value;
    let code: string;
    const videoprojecteurPersist: Videoprojecteur = {
      code: code,
      coutJour: formModel.coutJour as number,
      enPanneOuInutilisable: formModel.enPanneOuInutilisable as boolean,
    }
    return videoprojecteurPersist;
  }

}
