import {Component, Input, OnInit} from '@angular/core';
import {CentreDetail} from '../../shared/centreDetail.model';


@Component({
  selector: 'app-demande-affiliation',
  templateUrl: './demande-affiliation.component.html',
  styleUrls: ['./demande-affiliation.component.scss']
})
export class DemandeAffiliationComponent implements OnInit {
  @Input() CentreName: string;
  @Input() centreDetail: CentreDetail[];
  constructor() { }

  ngOnInit() {
  }

}
