import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Club} from '../_service/shared_files/club.model';
import {ClubsComponent} from '../clubs/clubs.component';

@Component({
  providers: [ClubsComponent],
  selector: 'app-single-club',
  templateUrl: './single-club.component.html',
  styleUrls: ['./single-club.component.scss']
})
export class SingleClubComponent implements OnInit {
  clubID;
  club;
  constructor(private route: ActivatedRoute, public clubs: ClubsComponent) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.clubID = data.id;
      }
    );
    window.scroll(0, 0);
 this.club = this.clubs.clubs.find((value => value.id == this.clubID));
  }
}
