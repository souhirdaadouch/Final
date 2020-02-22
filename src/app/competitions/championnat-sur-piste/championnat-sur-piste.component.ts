import {Component, OnInit} from '@angular/core';
import programme from 'src/assets/data/comp_j/programmePiste.json';
import {ProgrammePisteModel} from '../../shared/shared_files/programmePiste.model';
import pj1m from 'src/assets/data/comp_j/programmeMatinJourPremierPiste.json';
import pj1s from 'src/assets/data/comp_j/programmeSoirJourPremierPiste.json';
import pj2m from 'src/assets/data/comp_j/progMatinJour2Piste.json';
import pj2s from 'src/assets/data/comp_j/progSoirJour2Piste.json';
import pj3m from 'src/assets/data/comp_j/progMatinJour3Piste.json';
import pj3s from 'src/assets/data/comp_j/progSoirJour3Piste.json';


@Component({
    selector: 'app-championnat-sur-piste',
    templateUrl: './championnat-sur-piste.component.html',
    styleUrls: ['./championnat-sur-piste.component.scss']
})
export class ChampionnatSurPisteComponent implements OnInit {
    program: { id: number, Catégorie: string, Filles: string, Garçons: string } [] = programme;
    programCols = ['Catégorie', 'Filles', 'Garçons'];

    progJ1Matin: ProgrammePisteModel [] = pj1m;
    progJ1Soir: ProgrammePisteModel [] = pj1s;
    progJ2Matin: ProgrammePisteModel [] = pj2m;
    progJ2Soir: ProgrammePisteModel [] = pj2s;
    progJ3Matin: ProgrammePisteModel [] = pj3m;
    progJ3Soir: ProgrammePisteModel [] = pj3s;

    progCol = ['Horaire', 'Course', 'Tours', 'Lancers', 'Sauts'];

    constructor() {
    }

    ngOnInit() {
    }

}
