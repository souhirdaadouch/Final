import {Injectable} from '@angular/core';
import competitions from 'src/assets/data/comp_j/competitions.json';
import {CompetitionModel} from '../shared/shared_files/competition.model';

@Injectable({
    providedIn: 'root'
})
export class CompetitionService {

    public competitionsList: CompetitionModel [] = competitions;

    constructor() {
    }

    getAllComps(): CompetitionModel [] {
        return this.competitionsList;
    }

    getCompById(id): CompetitionModel {
        return this.competitionsList.find(c => c.id === id);
    }
}
