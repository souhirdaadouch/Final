import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-distance-details',
    templateUrl: './distance-details.component.html',
    styleUrls: ['./distance-details.component.scss']
})
export class DistanceDetailsComponent implements OnInit {

    @Input() distances: {
        idCat: number, categorie: string
        'oct-nov': string, dec: string, jan: string, champ: string
    } [];

    constructor() {
    }

    ngOnInit() {

    }

}
