import {Component, OnInit} from '@angular/core';
import reg from 'src/assets/data/comp_j/reglementCriteriumHiver.json';

@Component({
    selector: 'app-reglement-participation',
    templateUrl: './reglement-participation.component.html',
    styleUrls: ['./reglement-participation.component.scss']
})
export class ReglementParticipationComponent implements OnInit {

    reglement: { id: number, r: string } [] = reg;

    constructor() {
    }

    ngOnInit() {
    }

}
