import {Component, OnInit} from '@angular/core';
import {CalendrierModel} from '../../../shared/shared_files/calendrier.model';
import {TypeCompService} from '../../../_Service/type-comp.service';
import distanceCross from 'src/assets/data/comp_j/distanceCrossCountry.json';
import classement from 'src/assets/data/comp_j/classementEquipeCrossCountry.json';

@Component({
    selector: 'app-cross',
    templateUrl: './cross.component.html',
    styleUrls: ['./cross.component.scss']
})
export class CrossComponent implements OnInit {
    calendrier: CalendrierModel[];
    calendrierCols = ['manifestation', 'date', 'lieu', 'organisateur'];

    distances: {
        idCat: number, categorie: string
        'oct-nov': string, dec: string, jan: string, champ: string
    } [] = distanceCross;
    distanceIndex = ['categorie', 'oct-nov', 'dec', 'jan', 'champ'];
    distanceCol = ['Catégorie', 'Oct-Nov', 'Decembre', 'Janvier', 'Championnat de Tunisie'];

    classement = classement;
    classementCol = ['catégories', 'engagement', 'classement'];


    constructor(private typecomp: TypeCompService) {
    }

    ngOnInit() {
        this.calendrier = this.typecomp.getCalendrierByType('cross');
    }

}
