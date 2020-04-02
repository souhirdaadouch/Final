import {Component, Input, OnInit} from '@angular/core';
import {CalendrierService} from '../../_Service/calendrier.service';
import {ActivatedRoute} from '@angular/router';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-cal-det',
  templateUrl: './cal-det.component.html',
  styleUrls: ['./cal-det.component.scss']
})
export class CalDetComponent implements OnInit {

  p;
  dataSource;
  eventId;
  calendrier: CalendrierModel [];
  @Input() event: CalendrierModel;
  cols = ['manifestation', 'date', 'lieu', 'organisateur', 'niveau', 'categorie', 'type'];

  constructor(private calendrierServ: CalendrierService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    /*this.route.params
        .subscribe((data) => {
            console.log(data);
            this.eventId = parseInt(data.id, 10);
            if (this.eventId) {
                this.event = this.calendrierServ.getCalendrierEventById(this.eventId);
            }

        });*/
    this.calendrier = this.calendrierServ.getAllCalendrierEvents();
    this.p = 1;
    this.dataSource = this.calendrier;
  }

}
