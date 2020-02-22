import { Component, OnInit } from '@angular/core';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {TypeCompService} from '../../_Service/type-comp.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  calendrier: CalendrierModel [];
  calendrierCols = ['manifestation', 'date', 'lieu', 'organisateur'];

  constructor(private typecomp: TypeCompService) { }

  ngOnInit() {
    this.calendrier = this.typecomp.getCalendrierByType('masters');
  }

}

