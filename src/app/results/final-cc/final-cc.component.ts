import {Component, OnInit} from '@angular/core';
import {FinalCCGafsaService} from '../../_service/FinalCCGafsa';

@Component({
  selector: 'app-final-cc',
  templateUrl: './final-cc.component.html',
  styleUrls: ['./final-cc.component.scss']
})
export class FinalCCComponent implements OnInit {
  f: FinalCCGafsaService;
  public Senf;
  public Senm;
  public Junm;
  public Junf;
  public Caf;
  public Cam;
  public Minm;
  public Minf;

  constructor(f: FinalCCGafsaService) {
    this.f = f;
  }

  ngOnInit() {
    let fin = this.f.getJSON();
    this.Caf = fin.CAF;
    this.Cam = fin.CAM;
    this.Junf = fin.JUF;
    this.Junm = fin.JUM;
    this.Minf = fin.MinF;
    this.Minm = fin.MinM;
    this.Senf = fin.SEF;
    this.Senm = fin.SEM;
  }

}
