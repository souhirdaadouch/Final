import { Component, OnInit } from '@angular/core';
import {CalendrierService} from '../../_Service/calendrier.service';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import calend from '../../../assets/data/comp_j/calendrierGeneral.json';
@Component({
  selector: 'app-championnat',
  templateUrl: './championnat.component.html',
  styleUrls: ['./championnat.component.scss']
})
export class ChampionnatComponent implements OnInit {

  calendrier: CalendrierModel[] = calend;
  calendrierChampionnat: CalendrierModel[] = [] ;

  constructor(private calendrierServ: CalendrierService) {
  }

  ngOnInit() {
    this.calendrier = this.calendrierServ.getAllCalendrierEvents();
    for (let c of this.calendrier) {
      if (!(c.link === 'no-link')) {
        this.calendrierChampionnat.push(c);
        console.log(c.link);
      }
    }
  }

}
