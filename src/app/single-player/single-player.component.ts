import { Component, OnInit } from '@angular/core';
import {PlayersComponent} from '../players/players.component';
import {ActivatedRoute} from '@angular/router';
import {Player} from '../shared/player.model';

@Component({
  providers: [PlayersComponent],
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {
p: Player;
  constructor(private list: PlayersComponent, private route: ActivatedRoute) { }

  ngOnInit() {
     let x: number  = +this.route.snapshot.paramMap.get('id');
     for (let e of this.list.players) {
       if (e.id == x) {this.p = e;
                       break;
       }
     }
  }

}
