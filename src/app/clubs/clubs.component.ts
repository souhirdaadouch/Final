import {Component, OnInit} from '@angular/core';
import {Club} from '../_service/shared_files/club.model';
import {ClubsService} from '../_service/clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: Club[] = [];
  gouvernorats = [];

  constructor(public clubsService: ClubsService) {

  }

  ngOnInit() {
    this.clubsService.getClubs().subscribe(dataa => {
      dataa = dataa.map(x => {
        return {
          id: x._id,
          ...x
        };
      });
      for (const data of dataa) {
        this.clubs.push(new Club(data.id, data.name, data.president_secretaireGenerale,
          data.mobilePresident_secretaireGenerale, data.mobileClub, data.faxClub, data.adresse, data.gouvernorat,
          data.gouvernoratFR.replace(/\s/g, ''),
          data.image));
      }
      this.getGoveronrat();
      window.scroll(0, 0);
    });

  }

  getGoveronrat() {
    for (const club of this.clubs) {
      club.gouvernoratFR = club.gouvernoratFR.replace(/\s/g, '');
      if (!this.gouvernorats.includes(club.gouvernoratFR.replace(/\s/g, ''))) {
        this.gouvernorats.push(club.gouvernoratFR.replace(/\s/g, ''));
      }
    }
  }

  clicked(event: Event) {
    event.preventDefault();
  }
}
