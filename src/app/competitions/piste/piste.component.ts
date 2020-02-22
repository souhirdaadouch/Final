import {Component, OnInit} from '@angular/core';
import programme from 'src/assets/data/comp_j/programmePiste.json';
import qualification from 'src/assets/data/comp_j/qualificationPiste.json';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {TypeCompService} from 'src/app/_service/type-comp.service';

@Component({
    selector: 'app-piste',
    templateUrl: './piste.component.html',
    styleUrls: ['./piste.component.scss']
})
export class PisteComponent implements OnInit {

    calendrier: CalendrierModel [];
    calendrierCols = ['manifestation', 'date', 'lieu', 'organisateur'];

    qualif: {id: number, q: string} [] = qualification;

    program: { id: number, Catégorie: string, Filles: string, Garçons: string } [] = programme;
    programCols = ['Catégorie', 'Filles', 'Garçons'];

    constructor(private typecomp: TypeCompService) {
    }

    ngOnInit() {
        this.calendrier = this.typecomp.getCalendrierByType('piste');

    }

}
