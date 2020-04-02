import {Component, Input, OnInit} from '@angular/core';
import {Centre} from '../../shared/centre.model';
import {CentreDetail} from 'src/app/shared/centreDetail.model';

import * as data from 'src/assets/data/json/Centre/centreDetail.json';

@Component({
  selector: 'app-centres-list',
  templateUrl: './centres-list.component.html',
  styleUrls: ['./centres-list.component.scss']
})
export class CentresListComponent implements OnInit {
  datas: any = (data as any).default;
  CentreName: string;
  @Input() centre: Centre[];

  centreDetails: CentreDetail[] = [];

  constructor() {
    this.getCentreDetails();
  }

  ngOnInit() {
  }

  getCentreDetails() {
    for (const data of this.datas) {
      this.centreDetails.push(new CentreDetail(data.id, data.name, data.athlete, data.category,
        data.specialty, data.club));
    }
  }
}
