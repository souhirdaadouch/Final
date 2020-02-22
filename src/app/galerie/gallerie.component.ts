import {Component, OnInit} from '@angular/core';
import {GalerieList} from '../shared/galerieList.model';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit {

  galerie: GalerieList[] = [
    new GalerieList(1, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(2, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(3, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(4, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(5, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(6, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(7, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
    new GalerieList(8, 'single-player', 'Championnat Arabe Cadets 2019',
      'assets/img/players/1.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
