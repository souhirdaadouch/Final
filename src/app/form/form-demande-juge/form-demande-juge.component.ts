import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-juge',
  templateUrl: './form-demande-juge.component.html',
  styleUrls: ['./form-demande-juge.component.scss']
})
export class FormDemandeJugeComponent implements OnInit {
  DemandeJuge: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.DemandeJuge = new FormGroup({
      nom_prenomJuge: new FormControl(null, Validators.required),
      ddn: new FormControl(null, Validators.required),
      niveau: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      codepostal: new FormControl(null, Validators.required),
      poste: new FormControl(null, Validators.required),
      CCP_CCB: new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),
      poids: new FormControl(null, Validators.required),
      taille: new FormControl(null, Validators.required),
      certificat : new FormControl(null, Validators.required),
      paiement : new FormControl(null, Validators.required),
      photo : new FormControl(null, Validators.required)
    });
  }

}
