import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demande-mutation',
  templateUrl: './demande-mutation.component.html',
  styleUrls: ['./demande-mutation.component.scss']
})
export class DemandeMutationComponent implements OnInit {
  DemandeMutation: FormGroup;
  constructor() { }

  ngOnInit() {
    this.DemandeMutation = new FormGroup({
      nom_prenom: new FormControl(null, Validators.required),
      ddn: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      poste: new FormControl(null, Validators.required),
      saisionSportive: new FormControl(null, Validators.required),
      nomAsso: new FormControl(null, Validators.required),
      motif: new FormControl(null, Validators.required),
    });
  }

}
