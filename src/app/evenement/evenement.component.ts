import {Component, OnInit} from '@angular/core';
import {Evenement} from '../shared/evenement.model';

import * as data from 'src/assets/data/evenement.json';
import {EvenementService} from "../_service/evenement.service";
import {Subscription} from "rxjs";
import {Centre} from "../shared/centre.model";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {

  evenements: Evenement[] = [];
  private eventsSub: Subscription;



  constructor(private evenmentService: EvenementService) {

  }

  ngOnInit() {
    this.evenmentService.getEvent();
    this.eventsSub = this.evenmentService.getPostUpdateListener()
      .subscribe((events: Evenement[]) => {
        this.evenements = events;
      });
    this.evenements = this.evenmentService.evenements;
      // .subscribe(data => {
      //   console.log(data);
      //   this.evenements = data;
      // });
  }


}
