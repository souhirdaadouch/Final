import {Component, OnInit} from '@angular/core';
import {Ligue} from '../_service/shared_files/ligue.model';

@Component({
  selector: 'app-ligues',
  templateUrl: './ligues.component.html',
  styleUrls: ['./ligues.component.scss']
})
export class LiguesComponent implements OnInit {
  first = new Ligue('1', 'LIGUE CENTRE', 'LIGUE CENTRE@google.com', 'facebook',
    'twitter', '951585', '58485', 'rusia.jpg');
  second = new Ligue('2', 'LIGUE ouest', 'LIGUE CENTRE@google.com', 'facebook',
    'twitter', '951585', '58485', 'rusia.jpg');
  third = new Ligue('1', 'LIGUE east', 'LIGUE CENTRE@google.com', 'facebook',
    'twitter', '951585', '58485', 'rusia.jpg');
  ligues = [this.first, this.second, this.third];

  constructor() {
  }

  ngOnInit() {
  }

}
