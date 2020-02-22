import {Component, Input, OnInit} from '@angular/core';
import {CompetitionService} from '../../_Service/competition.service';
import {ActivatedRoute} from '@angular/router';
import {CompetitionModel} from '../../shared/shared_files/competition.model';

@Component({
    selector: 'app-comp-detail',
    templateUrl: './comp-detail.component.html',
    styleUrls: ['./comp-detail.component.scss']
})
export class CompDetailComponent implements OnInit {

    compId;
    @Input ()competition: CompetitionModel;

    constructor(private compService: CompetitionService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((data) => {
                this.compId = parseInt(data.id, 10);
                if (this.compId) {
                   this.competition = this.compService.getCompById(this.compId);
                }

            });
    }

}
