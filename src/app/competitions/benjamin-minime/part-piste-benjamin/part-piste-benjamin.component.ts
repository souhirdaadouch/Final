import { Component, OnInit } from '@angular/core';
import benj from 'src/assets/data/comp_j/benjaminsPiste.json';

@Component({
  selector: 'app-part-piste-benjamin',
  templateUrl: './part-piste-benjamin.component.html',
  styleUrls: ['./part-piste-benjamin.component.scss']
})
export class PartPisteBenjaminComponent implements OnInit {
  benjamins: { id: number, p: string } [] = benj;
  constructor() { }

  ngOnInit() {
  }

}
