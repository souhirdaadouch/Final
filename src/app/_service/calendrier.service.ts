import {Injectable} from '@angular/core';
import calendrier from 'src/assets/data/comp_j/calendrierGeneral.json';
import {CalendrierModel} from '../shared/shared_files/calendrier.model';

@Injectable({
    providedIn: 'root'
})
export class CalendrierService {
    public calendrierList: CalendrierModel [] = calendrier;

    constructor() {
    }

    getAllCalendrierEvents(): CalendrierModel [] {
        return this.calendrierList;
    }

    getCalendrierEventById(id): CalendrierModel {
        return this.calendrierList.find(e => e.id === id);
    }

    getEventByName(name) : CalendrierModel {
        return this.calendrierList.find( e => e.manifestation === name);
    }
}
