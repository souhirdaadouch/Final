import {Component, OnInit} from '@angular/core';
import saison from 'src/assets/data/comp_j/season.json';
import cat from 'src/assets/data/categorie.json';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    season: { season: string } [] = saison;
    cat: {
        id: number,
        Organisme: string,
        Catégorie: string,
        'Année de naissance': string
    } [] = cat;
    catCol = ['Organisme', 'Catégorie', 'Année de naissance'];

    constructor() {
    }

    ngOnInit() {
    }

}
