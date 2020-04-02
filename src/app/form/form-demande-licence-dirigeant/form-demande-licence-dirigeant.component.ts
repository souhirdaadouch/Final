import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-licence-dirigeant',
  templateUrl: './form-demande-licence-dirigeant.component.html',
  styleUrls: ['./form-demande-licence-dirigeant.component.scss']
})
export class FormDemandeLicenceDirigeantComponent implements OnInit {
  licenceDirigeantForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.licenceDirigeantForm = new FormGroup({
      'nom': new FormControl(null, Validators.required),
      'prenom': new FormControl(null),
      'dateNaissance': new FormControl(null, Validators.required),
      'lieuNaissance': new FormControl(null, Validators.required),
      'adresse': new FormControl(null, Validators.required),
      'codePostal': new FormControl(null, Validators.required),
      'profession': new FormControl(null, Validators.required),
      'diplomes': new FormArray([new FormControl(null, Validators.required)]),
      'cin': new FormControl(null, Validators.required),
      'dateEmission': new FormControl(null, Validators.required),
      'lieuEmission': new FormControl(null, Validators.required),
      'numTel': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
    });
  }
  onAddDiplome() {
    const control = new FormControl(null, Validators.required);
    (this.licenceDirigeantForm.get('diplomes') as FormArray).push(control);
  }
  onSubmit() {
    console.log(this.licenceDirigeantForm);
    const invalid = [];
    const controls = this.licenceDirigeantForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
  }
}
