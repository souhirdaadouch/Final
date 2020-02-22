import {Component, Input, OnInit} from '@angular/core';
import {Player} from 'src/app/shared/player.model';

@Component({
  selector: 'app-playerpalmares',
  templateUrl: './playerpalmares.component.html',
  styleUrls: ['./playerpalmares.component.scss']
})
export class PlayerpalmaresComponent implements OnInit {
  @Input() p: Object;
  constructor() { }

  ngOnInit() {
  }

}
