import {Component, OnInit} from '@angular/core';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {CalendrierService} from '../../_Service/calendrier.service';
import tech from 'src/assets/data/comp_j/progTechMarche.json';
import horaire from 'src/assets/data/comp_j/progHoraireMarche.json';

@Component({
    selector: 'app-championnat-marche-route',
    templateUrl: './championnat-marche-route.component.html',
    styleUrls: ['./championnat-marche-route.component.scss']
})
export class ChampionnatMarcheRouteComponent implements OnInit {

    marche: CalendrierModel;

    progTech: {id: number, Catégorie: string, Naissance: string, Distance: string, 'Classement par équipe': string} [] = tech;
    techCol = ['Catégorie', 'Naissance', 'Distance', 'Classement par équipe'];

    progHoraire: {id: number, Appel: string, Depart: string, Catégorie: string} [] = horaire;
    horaireCol = ['Appel', 'Depart', 'Catégorie'];

    constructor(private calendrier: CalendrierService) {
    }

    ngOnInit() {
        this.marche = this.calendrier.getCalendrierEventById(47);
    }

}
