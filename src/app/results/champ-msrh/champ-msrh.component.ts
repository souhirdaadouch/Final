import {Component, OnInit} from '@angular/core';
import {ChampMSRHammametService} from '../../_service/ChampMSRHammamet';

@Component({
  selector: 'app-champ-msrh',
  templateUrl: './champ-msrh.component.html',
  styleUrls: ['./champ-msrh.component.scss']
})
export class ChampMSRHComponent implements OnInit {
  c: ChampMSRHammametService;
  public Senf;
  public Senm;
  public Junm;
  public Junf;
  public Caf;
  public Cam;
  public Minm;
  public Minf;

  constructor(c: ChampMSRHammametService) {
    this.c = c;
  }

  ngOnInit() {
    let h = this.c.getJSON();
    this.Caf = h.CAF;
    this.Cam = h.CAM;
    this.Junf = h.JUF;
    this.Junm = h.JUM;
    this.Minf = h.MinF;
    this.Minm = h.MinM;
    this.Senf = h.SEF;
    this.Senm = h.SEM;
  }

}
