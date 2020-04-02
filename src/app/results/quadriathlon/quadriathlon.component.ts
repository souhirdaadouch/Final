import {Component, OnInit} from '@angular/core';
import {ChampECService} from '../../_service/ChampEC';

@Component({
  selector: 'app-quadriathlon',
  templateUrl: './quadriathlon.component.html',
  styleUrls: ['./quadriathlon.component.scss']
})
export class QuadriathlonComponent implements OnInit {
  e: ChampECService;
  public Quadm;
  public Quadf;

  constructor(e: ChampECService) {
    this.e = e;
  }

  ngOnInit() {
    let q = this.e.getJSON();
    this.Quadm = q.QuadriMiM;
    this.Quadf = q.QuadriMiF;
  }

}
