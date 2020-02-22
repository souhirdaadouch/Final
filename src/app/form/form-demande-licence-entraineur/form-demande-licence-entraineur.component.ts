import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-licence-entraineur',
  templateUrl: './form-demande-licence-entraineur.component.html',
  styleUrls: ['./form-demande-licence-entraineur.component.scss']
})
export class FormDemandeLicenceEntraineurComponent implements OnInit {
  licenceEntraineurForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.licenceEntraineurForm = new FormGroup({
      'nom': new FormControl(null, Validators.required),
      'prenom': new FormControl(null, Validators.required),
      'dateNaissance': new FormControl(null, Validators.required),
      'lieuNaissance': new FormControl(null, Validators.required),
      'adresse': new FormControl(null, Validators.required),
      'codePostal': new FormControl(null, Validators.required),
      'profession': new FormControl(null, Validators.required),
      'diplomes': new FormArray([new FormControl(null)]),
      'gradeActuel': new FormControl(null, Validators.required),
      'clubEntraine': new FormControl(null, Validators.required),
      'ccpOuCcb': new FormControl(null, Validators.required),
      'cin': new FormControl(null, Validators.required),
      'dateEmission': new FormControl(null, Validators.required),
      'lieuEmission': new FormControl(null, Validators.required),
      'numTel': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
    });
  }
  onAddDiplome() {
    const control = new FormControl(null, Validators.required);
    (this.licenceEntraineurForm.get('diplomes') as FormArray).push(control);
  }
  onSubmit() {
    console.log(this.licenceEntraineurForm);
    const invalid = [];
    const controls = this.licenceEntraineurForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
  }
}
