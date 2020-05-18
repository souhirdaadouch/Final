import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import competitions from 'src/assets/data/comp_j/competitions.json';
import {CompetitionModel} from '../shared/shared_files/competition.model';

@Injectable({
    providedIn: 'root'
})
export class CompetitionService {

    public competitionsList: CompetitionModel [] = competitions;

    constructor(private http: HttpClient) {
    }

    getAllComps() {
        return this.http.get('http://localhost:3000/api/competition');
    }

    getCompById(id): CompetitionModel {
        return this.competitionsList.find(c => c.id === id);
    }
}
