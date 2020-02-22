import { Component, OnInit } from '@angular/core';
import {Formation20Service} from '../../_service/form20';

@Component({
  selector: 'app-formation20',
  templateUrl: './formation20.component.html',
  styleUrls: ['./formation20.component.scss']
})
export class Formation20Component implements OnInit {
  fm: Formation20Service;
  public Formation2020;
  constructor(fm: Formation20Service) {
    this.fm = fm;
  }

  ngOnInit() {
    let c = this.fm.getJSON();
    this.Formation2020 = c;
    console.log(this.Formation2020);
  }

}
