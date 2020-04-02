import {Component, OnInit} from '@angular/core';
import benj from 'src/assets/data/comp_j/progTechBenjamins.json';
import minime from 'src/assets/data/comp_j/progTechMinime.json';

@Component({
    selector: 'app-benjamin-minime',
    templateUrl: './benjamin-minime.component.html',
    styleUrls: ['./benjamin-minime.component.scss']
})
export class BenjaminMinimeComponent implements OnInit {

    progCols = ['Garçons', 'Filles'];
    benjamins: { Garçons: string, Filles: string } [] = benj;
    minimes: { Garçons: string, Filles: string } [] = minime;


    constructor() {
    }

    ngOnInit() {
    }

}
