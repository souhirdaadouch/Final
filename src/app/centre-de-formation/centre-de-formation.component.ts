import {Component, OnInit} from '@angular/core';

import {Centre} from '../shared/centre.model';

import * as data from 'src/assets/data/json/Centre/Centre.json';

@Component({
  selector: 'app-centre-de-formation',
  templateUrl: './centre-de-formation.component.html',
  styleUrls: ['./centre-de-formation.component.scss']
})
export class CentreDeFormationComponent implements OnInit {
  datas: any = (data as any).default;

  centres: Centre[] = [];


  constructor() {
    this.getCentre();
  }

  ngOnInit() {
  }

  getCentre() {
    for (const data of this.datas) {
      this.centres.push(new Centre(data.id, data.name, data.directeur, data.tel));
    }

  }

}
