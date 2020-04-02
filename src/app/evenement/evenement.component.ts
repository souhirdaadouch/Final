import { Component, OnInit } from '@angular/core';
import {Evenement} from '../shared/evenement.model';

import * as data from 'src/assets/data/evenement.json';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  datas: any = (data as any).default;

  evenements: Evenement[] = [];


  constructor() {
  this.getEvent();
  }

  ngOnInit() {
  }

  getEvent() {
    for (const data of this.datas) {
      this.evenements.push(new Evenement(data.eventId, data.eventPath, data.eventTitle,
        data.eventDate, data.eventComments, data.eventImgPath, data.eventDescrip));
    }
  }

}
