import {Injectable} from '@angular/core';
import calendrier from 'src/assets/data/comp_j/calendrierGeneral.json';
import {CalendrierModel} from '../shared/shared_files/calendrier.model';
import {HttpClient} from '@angular/common/http';
import {CalenderModel} from '../shared/shared_files/calender.model';

@Injectable({
    providedIn: 'root'
})
export class CalendrierService {
    public calendrierList: CalendrierModel [] = calendrier;
    public calenderList: CalenderModel [];

    constructor(private http: HttpClient) {
    }

    getAllCalendrierEvents() {
        return this.http.get('http://localhost:3000/api/session_comptition');
    }

    getCalendrierEventById(id) {
        // this.http.get('http://localhost:3000/api/session_comptition')
        //     .subscribe(cal => {
        //         this.calenderList = cal as CalenderModel [];
                return this.calendrierList.find(e => e.id === id);
        //     });
    }

    getEventByName(name) {
        return this.calendrierList.find(e => e.manifestation === name);
    }
}
