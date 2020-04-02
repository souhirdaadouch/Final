import { Component, OnInit } from '@angular/core';
import participation from 'src/assets/data/comp_j/participationMarche.json';


@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {
  participation: {id: number, p: string, adresse: string} [] = participation;
  constructor() { }

  ngOnInit() {
  }

}
