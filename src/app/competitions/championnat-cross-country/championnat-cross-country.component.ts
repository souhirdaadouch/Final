import {Component, OnInit} from '@angular/core';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {CalendrierService} from '../../_Service/calendrier.service';
import prog from 'src/assets/data/comp_j/progTechChampCross.json';
import horaire from 'src/assets/data/comp_j/progHoraireChampCross.json';


@Component({
    selector: 'app-championnat-cross-country',
    templateUrl: './championnat-cross-country.component.html',
    styleUrls: ['./championnat-cross-country.component.scss']
})
export class ChampionnatCrossCountryComponent implements OnInit {

    public cross: CalendrierModel;

    programme: { id: number, Catégorie: string, Masculin: string, Feminin: string } [] = prog;
    columns = ['Catégorie', 'Masculin', 'Feminin'];

    horaire: { id: number, Horaire: string, Catégorie: string, Distance: string, Classement: number } [] = horaire;
    horaireCols = ['Horaire', 'Catégorie', 'Distance', 'Classement'];

    constructor(private calendrier: CalendrierService) {
    }

    ngOnInit() {
        this.cross = this.calendrier.getCalendrierEventById(40);

    }

}
