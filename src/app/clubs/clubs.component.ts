import {Component, OnInit} from '@angular/core';
import {Club} from '../_service/shared_files/club.model';
// @ts-ignore
import * as data from 'src/assets/data/jsons/clubs.json';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  datas: any = (data as any).default;

  clubs = [];
  gouvernorats = [];

  constructor() {
    this.getInfos();
  }

  ngOnInit() {
    this.getGoveronrat();
    console.log(this.clubs);
  }

  getGoveronrat() {
    for (const club of this.clubs) {
      if (!this.gouvernorats.includes(club.gouvernoratFR.replace(/\s/g, ''))) {
        this.gouvernorats.push(club.gouvernoratFR.replace(/\s/g, ''));
      }
    }
  }

  getInfos() {
    for (const data of this.datas) {
      this.clubs.push(new Club(data.id, data.name, data.president_secretaireGenerale,
        data.mobilePresident_secretaireGenerale, data.mobileClub, data.faxClub, data.adresse, data.gouvernorat,
        data.gouvernoratFR.replace(/\s/g, ''),
        data.img));
    }
  }
}
