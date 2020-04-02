import {Component, OnInit} from '@angular/core';
import {ChampECService} from '../../_service/ChampEC';

@Component({
  selector: 'app-decathlon',
  templateUrl: './decathlon.component.html',
  styleUrls: ['./decathlon.component.scss']
})
export class DecathlonComponent implements OnInit {
  d: ChampECService;
  public SenM;
  public JunM;
  public CadM;

  constructor(d: ChampECService) {
    this.d = d;
  }

  ngOnInit() {
    let dec = this.d.getJSON();
    this.CadM = dec.DecCM;
    this.JunM = dec.DecJM;
    this.SenM = dec.DecSM;
  }

}
