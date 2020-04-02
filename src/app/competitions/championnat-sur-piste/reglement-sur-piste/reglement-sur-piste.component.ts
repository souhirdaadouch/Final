import { Component, OnInit } from '@angular/core';
import reglementParticipation from 'src/assets/data/comp_j/reglementPartChampPiste.json';
import reglementRecomp from 'src/assets/data/comp_j/reglementRecompChampPiste.json';

@Component({
  selector: 'app-reglement-sur-piste',
  templateUrl: './reglement-sur-piste.component.html',
  styleUrls: ['./reglement-sur-piste.component.scss']
})
export class ReglementSurPisteComponent implements OnInit {

  participation: {id: number, p: string} [] = reglementParticipation;
  recompense: {id: number, r: string} [] = reglementRecomp;

  constructor() { }

  ngOnInit() {
  }

}
