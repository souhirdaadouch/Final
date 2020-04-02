import { Component, OnInit } from '@angular/core';
import notes from 'src/assets/data/comp_j/notesChampEpComb.json';

@Component({
  selector: 'app-notes-champ-ep-comb',
  templateUrl: './notes-champ-ep-comb.component.html',
  styleUrls: ['./notes-champ-ep-comb.component.scss']
})
export class NotesChampEpCombComponent implements OnInit {
  notes: {id: number, n: string} [] = notes;

  constructor() { }

  ngOnInit() {
  }

}
