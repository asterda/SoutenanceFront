import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Salle} from "../../../model/Salle";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-salle',
  templateUrl: './salle-update.component.html',
  styleUrls: ['./salle-update.component.css']
})
export class SalleUpdateComponent implements OnInit {

  code: string;
  salleForm: FormGroup;
  salle: Salle;

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.code = params['code'];
      this.salleService.findOne(this.code).subscribe(salle => {
        this.salle = salle;
        this.createForm(this.salle);
      });
    });
  }

  ngOnInit() { }

  createForm(salle: Salle) {
    this.salleForm = this.fb.group({
      code: [{value: salle.code, disabled: true}, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])],
      coutJour: [salle.coutJour, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ])],
      enPanneOuInutilisable: [salle.enPanneOuInutilisable, Validators.compose([
        Validators.required,
        Validators.pattern('^true|false$')
      ])],
      capacite: [salle.capacite, Validators.compose([
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ])],
      etage: [salle.etage, Validators.compose([
        Validators.required,
        Validators.pattern('^-?[0-9]$')
      ])]
      });
  }

  onSubmit() {
    this.salle = this.preparePersistSalle();
    this.salle.code = this.code; // undefined car disabled
    this.salleService.update(this.salle).subscribe(
      salleUp => this.salle = salleUp,
      err => {},
      () => this.router.navigateByUrl('admin/salles')
    );
  }

  preparePersistSalle(): Salle {
    const formModel = this.salleForm.value;
    let code: string;
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
