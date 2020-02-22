import {Component, OnInit} from '@angular/core';
import carac from 'src/assets/data/comp_j/caracCourseHaiesBenjamin.json';

@Component({
    selector: 'app-caract-haies',
    templateUrl: './caract-haies.component.html',
    styleUrls: ['./caract-haies.component.scss']
})
export class CaractHaiesComponent implements OnInit {

    haies: {
        nom: string, Haies: string, Hauteur: string, 'Dép-1H': string,
        Intervalle: string, 'DH-Arrivée': string
    } [] = carac;
    cols = ['Haies', 'Hauteur', 'Dép-1H', 'Intervalle', 'DH-Arrivée'];

    constructor() {
    }

    ngOnInit() {
    }

}
