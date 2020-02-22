import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GallerieComponent} from '../gallerie.component';
import {GalerieList} from '../../shared/galerieList.model';
import * as data from 'src/assets/data/json/Galerie/PicturesPaths.json';

@Component({
  providers: [GallerieComponent],
  selector: 'app-galerie-detail',
  templateUrl: './galerie-detail.component.html',
  styleUrls: ['./galerie-detail.component.scss']
})
export class GalerieDetailComponent implements OnInit {
  datas: any = (data as any).default;
  galerieId;
  galerie: GalerieList;
  // push data into the array from the backend
  picturePath = [];
  constructor(public route: ActivatedRoute, public galeris: GallerieComponent) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.galerieId = data.id;
      }
    );
    this.galerie = this.galeris.galerie.find(value => value.galerieId == this.galerieId);

    this.getPictures();
  }

  getPictures() {
    for (const data of this.datas) {
      if (this.galerieId == data.id) {
        for (const path of data.pathImg) {
          this.picturePath.push(path);
        }
      }
    }
    console.log(this.datas);
  }

}
