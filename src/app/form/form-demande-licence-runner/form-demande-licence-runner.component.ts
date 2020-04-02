import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-licence-runner',
  templateUrl: './form-demande-licence-runner.component.html',
  styleUrls: ['./form-demande-licence-runner.component.scss']
})
export class FormDemandeLicenceRunnerComponent implements OnInit {
  sexes = ['Homme', 'Femme'];
  montant = 20;
  ext = false;
  licenceRunnerForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.licenceRunnerForm = new FormGroup({
      'club': new FormControl(null, Validators.required),
      'ligue': new FormControl(null, Validators.required),
      'nom': new FormControl(null, Validators.required),
      'prenom': new FormControl(null, Validators.required),
      'dateNaissance': new FormControl(null, Validators.required),
      'lieu': new FormControl(null, Validators.required),
      'poids': new FormControl(null, Validators.required),
      'taille': new FormControl(null, Validators.required),
      'sexe': new FormControl(null, Validators.required),
      'nationalite': new FormControl(null, Validators.required),
      'categorie': new FormControl(null, Validators.required),
      'numAncienneLicence': new FormControl(null, Validators.required),
      'adresse': new FormControl(null, Validators.required),
      'numTel': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    console.log(this.licenceRunnerForm);
  }
}
