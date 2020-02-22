import {Component, OnInit} from '@angular/core';
import moisMarche from 'src/assets/data/comp_j/marcheMois.json';
import {DistanceModel} from '../../shared/shared_files/distance.model';
import {MarcheService} from '../../_Service/marche.service';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {TypeCompService} from '../../_Service/type-comp.service';


@Component({
    selector: 'app-marche',
    templateUrl: './marche.component.html',
    styleUrls: ['./marche.component.scss']
})
export class MarcheComponent implements OnInit {
    calendrier: CalendrierModel[];
    calendrierCols = ['manifestation', 'date', 'lieu', 'organisateur'];
    distanceCol = ['Catégories', 'Garçons', 'Filles'];
    distanceRow: (DistanceModel [])[] = new Array();
    mois: { id: number, mois: string } [] = moisMarche;

    constructor(private marcheServ: MarcheService, private typecomp: TypeCompService) {
    }

    ngOnInit() {
        this.calendrier = this.typecomp.getCalendrierByType('marche');
        for (let c of this.mois) {
            this.distanceRow.push(this.marcheServ.getDistanceByMois(c.mois));
        }


    }

}
