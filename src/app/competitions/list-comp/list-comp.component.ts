import {Component, OnInit} from '@angular/core';
import {CompetitionService} from '../../_Service/competition.service';
import {CompetitionModel} from '../../shared/shared_files/competition.model';

@Component({
    selector: 'app-list-comp',
    templateUrl: './list-comp.component.html',
    styleUrls: ['./list-comp.component.scss']
})
export class ListCompComponent implements OnInit {
    competitions: CompetitionModel [];

    constructor(private compService: CompetitionService) {
    }

    ngOnInit() {
        this.competitions = this.compService.getAllComps();

    }

}
