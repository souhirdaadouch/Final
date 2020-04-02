import { Component, OnInit } from '@angular/core';
import participation from 'src/assets/data/comp_j/participationEpreuveCombine.json';

@Component({
  selector: 'app-part-ep-comb',
  templateUrl: './part-ep-comb.component.html',
  styleUrls: ['./part-ep-comb.component.scss']
})
export class PartEpCombComponent implements OnInit {
  participation: {id: number, p: string, adresse: string} [] = participation;
  constructor() { }

  ngOnInit() {
  }

}
