import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GallerieComponent} from '../gallerie.component';
import {GalerieList} from '../../shared/galerieList.model';
import * as data from 'src/assets/data/json/Galerie/PicturesPaths.json';
import {GalerieService} from "../../_service/galerie.service";
import {Subscription} from "rxjs";

@Component({
  providers: [GallerieComponent],
  selector: 'app-galerie-detail',
  templateUrl: './galerie-detail.component.html',
  styleUrls: ['./galerie-detail.component.scss']
})
export class GalerieDetailComponent implements OnInit {
  galerieId;
  galerie: GalerieList;
  private postsSub: Subscription;


  // push data into the array from the backend
  picturePath = [];
  constructor(public route: ActivatedRoute, public galeris: GallerieComponent, private galerieService: GalerieService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        console.log(data.id)
        this.galerieId = data.id;
      }
    );
    this.galerieService.getPictures(this.galerieId);
    // this.picturePath = this.galerieService.picturePath;
    this.postsSub = this.galerieService.getPostUpdateListener()
      .subscribe((posts: []) => {
        this.picturePath = posts;
      });
  }



}
