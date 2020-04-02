import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ligue} from '../_service/shared_files/ligue.model';


@Component({
  selector: 'app-single-ligue',
  templateUrl: './single-ligue.component.html',
  styleUrls: ['./single-ligue.component.scss']
})
export class SingleLigueComponent implements OnInit {
  ligueID;
  ligue = new Ligue('1', 'LIGUE CENTRE', 'LIGUE CENTRE@google.com', 'facebook',
    'twitter', '951585', '58485', 'rusia.jpg');
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.ligueID = data.id;
      }
    );
    window.scroll(0, 0);
  }
}
