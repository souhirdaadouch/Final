import {Component, Input, OnInit} from '@angular/core';
import {CentreDetail} from '../../shared/centreDetail.model';


@Component({
  selector: 'app-demande-master',
  templateUrl: './demande-master.component.html',
  styleUrls: ['./demande-master.component.scss']
})
export class DemandeMasterComponent implements OnInit {
  @Input() CentreName: string;
  @Input() centreDetail: CentreDetail[];
  constructor() { }

  ngOnInit() {
  }

}
