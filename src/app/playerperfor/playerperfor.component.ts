import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playerperfor',
  templateUrl: './playerperfor.component.html',
  styleUrls: ['./playerperfor.component.scss']
})
export class PlayerperforComponent implements OnInit {
  @Input() p: Object;
  constructor() { }

  ngOnInit() {
  }

}
