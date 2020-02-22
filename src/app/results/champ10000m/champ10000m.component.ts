import { Component, OnInit } from '@angular/core';
import {ChampECService} from '../../_service/ChampEC';

@Component({
  selector: 'app-champ10000m',
  templateUrl: './champ10000m.component.html',
  styleUrls: ['./champ10000m.component.scss']
})
export class Champ10000mComponent implements OnInit {
  c: ChampECService;
  public SenF;
  public JunF;
  public JunM;
  public SenM;
  constructor(c: ChampECService ) {
    this.c = c;
  }

  ngOnInit() {
    let a = this.c.getJSON();
    this.JunF = a.DixMilleJUF;
    this.JunM = a.DixMillemJUM;
    this.SenF = a.DixMillemSEF;
    this.SenM = a.DixMillemSEM;
  }

}
