import {Component, OnInit} from '@angular/core';
import progTech from 'src/assets/data/comp_j/progTechCriteriumHiver.json';
import progHoraire from 'src/assets/data/comp_j/progHoraireCriteriumHiver.json';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {CalendrierService} from '../../_Service/calendrier.service';

@Component({
    selector: 'app-criterium-hiver',
    templateUrl: './criterium-hiver.component.html',
    styleUrls: ['./criterium-hiver.component.scss']
})
export class CriteriumHiverComponent implements OnInit {

    progTech: { id: number, Catégorie: string, Masculin: string, Feminin: string } [] = progTech;
    progHoraire: { Horaire: string, Courses: string, Lancers: string, Sauts: string } [] = progHoraire;

    tech = ['Catégorie', 'Masculin', 'Feminin'];
    horaire = ['Horaire', 'Courses', 'Lancers', 'Sauts'];

    event: CalendrierModel;

    constructor(private calendrier: CalendrierService) {
    }

    ngOnInit() {
        this.event = this.calendrier.getCalendrierEventById(44);
    }

}
