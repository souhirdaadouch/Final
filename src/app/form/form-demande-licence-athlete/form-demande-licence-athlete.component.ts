import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-licence-athlete',
  templateUrl: './form-demande-licence-athlete.component.html',
  styleUrls: ['./form-demande-licence-athlete.component.scss']
})
export class FormDemandeLicenceAthleteComponent implements OnInit {
  sexes = ['Homme', 'Femme'];
  licenceAthleteForm: FormGroup;
  montant = -1;
  ext = true;
  AffiliationForm: FormGroup;
  DemandeJuge: FormGroup;
  constructor() { }

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
      membres_comitedirecteur: new FormControl(null, Validators.required),
      pres_sectionathlet: new FormControl(null, Validators.required),
      secretaire_sectionathlet: new FormControl(null, Validators.required),
      tresorier_sectionathlet: new FormControl(null, Validators.required),
      directeur_tech: new FormControl(null, Validators.required),
      membres_sectionathlet: new FormControl(null, Validators.required),
      entraineurs: new FormControl(null, Validators.required),
      nom_perschargee: new FormControl(null, Validators.required),
      adresse_perschargee: new FormControl(null, Validators.required)
    });

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
    })

    this.licenceAthleteForm = new FormGroup({
      club: new FormControl(null, Validators.required),
      ligue: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      dateNaissance: new FormControl(null, Validators.required),
      lieu: new FormControl(null, Validators.required),
      poids: new FormControl(null, Validators.required),
      taille: new FormControl(null, Validators.required),
      sexe: new FormControl(null, Validators.required),
      nationalite: new FormControl(null, Validators.required),
      categorie: new FormControl(null, Validators.required),
      numAncienneLicence: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      numTel: new FormControl(null, Validators.required),
    });
  }

}
