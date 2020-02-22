import { Component, OnInit } from '@angular/core';
import {CalendrierModel} from '../../shared/shared_files/calendrier.model';
import {CalendrierService} from '../../_Service/calendrier.service';
import epCom from 'src/assets/data/comp_j/progTechEpComb.json';
import marche from 'src/assets/data/comp_j/progMarcheChampEpComb.json';
import hj1m from 'src/assets/data/comp_j/progMatinJour1ChampEpComb.json';
import hj1s from 'src/assets/data/comp_j/progSoirJour1ChampEpComb.json';
import hj2m from 'src/assets/data/comp_j/progMatinJour2ChampEpComb.json';
import hj2s from 'src/assets/data/comp_j/progSoirJour2ChampEpComb.json';
import haie from 'src/assets/data/comp_j/caracCourseHaiesChampEpComb.json';
import engin from 'src/assets/data/comp_j/caracEnginsLancers.json';
import {ProgrammePisteModel} from '../../shared/shared_files/programmePiste.model';


@Component({
  selector: 'app-championnat-epr-comb',
  templateUrl: './championnat-epr-comb.component.html',
  styleUrls: ['./championnat-epr-comb.component.scss']
})
export class ChampionnatEprCombComponent implements OnInit {
  event: CalendrierModel;

  epcom: {Catégorie: string, Jours: string, Masculin: string, Feminin: string} [] = epCom;
  epcomCol = ['Catégorie', 'Jours', 'Masculin', 'Feminin'];
  marhceCol = ['Catégorie', 'Masculin', 'Feminin'];
  marhce: {Catégorie: string, Masculin: string, Feminin: string} [] = marche;
  hj1m: ProgrammePisteModel [] = hj1m;
  hj1s: ProgrammePisteModel [] = hj1s;
  hj2m: ProgrammePisteModel [] = hj2m;
  hj2s: ProgrammePisteModel [] = hj2s;
  horaireCol = ['Horaire', 'Courses', 'Lancers', 'Sauts'];

  haies: {'Epreuves': string, 'Catégories': string, 'N.Haies': string, 'Hauteur': string, 'Départ': string,
    'Intervalle': string, 'Arrivée': string} [] = haie;
  haiesCol = ['Epreuves', 'Catégories', 'N.Haies', 'Hauteur', 'Départ', 'Intervalle', 'Arrivée'];
  engins: {'Epreuves': string, 'Minimes Filles': string, 'Minimes Garçons': string} [] = engin;
  enginsCol = ['Epreuves', 'Minimes Filles', 'Minimes Garçons'];

  constructor(private calendrier: CalendrierService) { }

  ngOnInit() {
    this.event = this.calendrier.getCalendrierEventById(62);
  }

}
