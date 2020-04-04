import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demande-affiliation',
  templateUrl: './demande-affiliation.component.html',
  styleUrls: ['./demande-affiliation.component.scss']
})
export class DemandeAffiliationComponent implements OnInit {
  AffiliationForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.AffiliationForm = new FormGroup({
      Date: new FormControl(null, Validators.required),
      Gouvernorat: new FormControl(null, Validators.required),
      nom_club: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      codepostal: new FormControl(null, Validators.required),
      num_visa: new FormControl(null, Validators.required),
      date_visa: new FormControl(null, Validators.required),
      couleurs: new FormControl(null, Validators.required),
      CCP: new FormControl(null, Validators.required),
      Tel: new FormControl(null, Validators.required),
      Fax: new FormControl(null, Validators.required),
      pres_comitedirecteur: new FormControl(null, Validators.required),
      secretaire_comitedirecteur: new FormControl(null, Validators.required),
      tresorier_comitedirecteur: new FormControl(null, Validators.required),
      pres_sectionathlet: new FormControl(null, Validators.required),
      secretaire_sectionathlet: new FormControl(null, Validators.required),
      tresorier_sectionathlet: new FormControl(null, Validators.required),
      directeur_tech: new FormControl(null, Validators.required),
      nom_perschargee: new FormControl(null, Validators.required),
      adresse_perschargee: new FormControl(null, Validators.required)
    });
  }

}
