import {Component, OnInit} from '@angular/core';
import {Worker} from '../_service/shared_files/worker.model';
// @ts-ignore
import * as data from 'src/assets/data/jsons/bureau.json';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {
  datas: any = (data as any).default;
  workers = [];

  ngOnInit() {
    this.getInfos();
  }

  getInfos() {
    for (const data of this.datas) {
      this.workers.push(new Worker(data.name, data.dateNaissance, data.cin, data.tache,
        data.mobile, data.mobile2, data.email, data.image));
    }
  }

  constructor() {
  }

}
