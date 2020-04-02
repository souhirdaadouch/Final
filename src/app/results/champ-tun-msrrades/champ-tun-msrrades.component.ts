import {Component, OnInit} from '@angular/core';
import {ChampTunMSRRadesService} from '../../_service/ChampTunMSRRades';

@Component({
  selector: 'app-champ-tun-msrrades',
  templateUrl: './champ-tun-msrrades.component.html',
  styleUrls: ['./champ-tun-msrrades.component.scss']
})
export class ChampTunMSRradesComponent implements OnInit {
  c: ChampTunMSRRadesService;
  public Jun;
  public Senf;
  public Senm;
  public Junm;
  public Junf;

  constructor(c: ChampTunMSRRadesService) {
    this.c = c;
  }

  ngOnInit() {
    let m = this.c.getJSON();
    this.Jun = m.ChampRSJ;
    this.Junf = m.JunF;
    this.Junm = m.JunM;
    this.Senf = m.SenF;
    this.Senm = m.SenM;
  }

}
