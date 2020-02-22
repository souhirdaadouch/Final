import {Component, OnInit} from '@angular/core';
import {Commission} from '../_service/shared_files/commission.model';
// @ts-ignore
import * as data from 'src/assets/data/jsons/comissions.json';

@Component({
  selector: 'app-commission-federale',
  templateUrl: './commission-federale.component.html',
  styleUrls: ['./commission-federale.component.scss']
})
export class CommissionFederaleComponent implements OnInit {
  datas: any = (data as any).default;
  commissions = [];

  constructor() {
  }

  ngOnInit() {
    this.getInfos();
  }

  getInfos() {
    for (let data of this.datas) {
  this.commissions.push(new Commission(data.name, data.email, data.commission, data.image));
    }
  }
}
