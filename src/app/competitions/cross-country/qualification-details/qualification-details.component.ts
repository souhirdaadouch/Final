import {Component, OnInit} from '@angular/core';
import quali from 'src/assets/data/comp_j/qualificationsRecompensesCrossCountry.json';


@Component({
    selector: 'app-qualification-details',
    templateUrl: './qualification-details.component.html',
    styleUrls: ['./qualification-details.component.scss']
})
export class QualificationDetailsComponent implements OnInit {

    qualif: { qualifications: string, reglementEtRecompenses: string } [] = quali;

    constructor() {
    }

    ngOnInit() {
    }

}
