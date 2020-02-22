import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TeamsComponent} from './teams/teams.component';
import {PlayersComponent} from './players/players.component';
import {SinglePlayerComponent} from './single-player/single-player.component';
import {ResultsComponent} from './results/results.component';
import {TablePointComponent} from './table-point/table-point.component';
import {GroupsComponent} from './groups/groups.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewsComponent} from './news/news.component';
import {SingleNewsComponent} from './single-news/single-news.component';
import {TopplayerComponent} from './topplayer/topplayer.component';
import {FormationsComponent} from './formations/formations.component';
import {AthlesanteComponent} from './athlesante/athlesante.component';
import {ProjetComponent} from './athlesante/projet/projet.component';
import {ProgrammeComponent} from './athlesante/programme/programme.component';
import {FormulaireComponent} from './formations/formulaire/formulaire.component';
import {CommuniqueeComponent} from './formations/communiquee/communiquee.component';
import {ListeParticipantComponent} from './formations/liste-participant/liste-participant.component';
import {RecordComponent} from './home/record/record.component';
import {RecordinComponent} from './home/record/recordin/recordin.component';
import {RecordfemComponent} from './home/record/recordfem/recordfem.component';
import {Champarabe20Component} from './home/champarabe20/champarabe20.component';
import {CommissionFederaleComponent} from './commission-federale/commission-federale.component';
import {BureauComponent} from './bureau/bureau.component';
import {ClubsComponent} from './clubs/clubs.component';
import {SingleClubComponent} from './single-club/single-club.component';
import {LiguesComponent} from './ligues/ligues.component';
import {SingleLigueComponent} from './single-ligue/single-ligue.component';
import {PresentationComponent} from './presentation/presentation.component';
import {AffiliatedClubsComponent} from './affiliated-clubs/affiliated-clubs.component';
import {Formation20Component} from './formations/formation20/formation20.component';
import {RecordHComponent} from './home/record/record-h/record-h.component';
import {ReglementsComponent} from './reglements/reglements.component';
import {ReglementComponent} from './reglement/reglement.component';
import {CentreDeFormationComponent} from './centre-de-formation/centre-de-formation.component';
import {EvenementDetailComponent} from './evenement/evenement-detail/evenement-detail.component';
import {EvenementComponent} from './evenement/evenement.component';
import {GallerieComponent} from './galerie/gallerie.component';
import {GalerieDetailComponent} from './galerie/galerie-detail/galerie-detail.component';
import {ListCompComponent} from './competitions/list-comp/list-comp.component';
import {CategoriesComponent} from './competitions/categories/categories.component';
import {ListCalComponent} from './calendrier-competition/list-cal/list-cal.component';
import {ChampionnatMarcheRouteComponent} from './competitions/championnat-marche-route/championnat-marche-route.component';
import {ChampionnatSurPisteComponent} from './competitions/championnat-sur-piste/championnat-sur-piste.component';
import {CriteriumHiverComponent} from './competitions/criterium-hiver/criterium-hiver.component';
import {ChampionnatEprCombComponent} from './competitions/championnat-epr-comb/championnat-epr-comb.component';
import {ChampionnatCrossCountryComponent} from './competitions/championnat-cross-country/championnat-cross-country.component';
import {PisteComponent} from './competitions/piste/piste.component';
import {MarcheComponent} from './competitions/marche/marche.component';
import {MinimasAthleteCibleComponent} from './competitions/minimas-athlete-cible/minimas-athlete-cible.component';
import {BenjaminMinimeComponent} from './competitions/benjamin-minime/benjamin-minime.component';
import {CrossComponent} from './competitions/cross-country/cross/cross.component';
import {CompMasterComponent} from './comp-master/comp-master.component';
import {MasterComponent} from './competitions/master/master.component';
import {ChampTunMSRradesComponent} from './results/champ-tun-msrrades/champ-tun-msrrades.component';
import {QuadriathlonComponent} from './results/quadriathlon/quadriathlon.component';
import {Champ10000mComponent} from './results/champ10000m/champ10000m.component';
import {HeptathlonComponent} from './results/heptathlon/heptathlon.component';
import {DecathlonComponent} from './results/decathlon/decathlon.component';
import {ChampPisteComponent} from './results/champ-piste/champ-piste.component';
import {ChampMSRHComponent} from './results/champ-msrh/champ-msrh.component';
import {ChampAfr2019Component} from './results/champ-afr2019/champ-afr2019.component';
import {ChampArCComponent} from './results/champ-ar-c/champ-ar-c.component';
import {FinalCCComponent} from './results/final-cc/final-cc.component';
import {DemandeMasterComponent} from './nos-documents/demande-master/demande-master.component';
import {DemandeAffiliationComponent} from './nos-documents/demande-affiliation/demande-affiliation.component';
import {FormDemandeLicenceEntraineurComponent} from './form/form-demande-licence-entraineur/form-demande-licence-entraineur.component';
import {FormDemandeLicenceDirigeantComponent} from './form/form-demande-licence-dirigeant/form-demande-licence-dirigeant.component';
import {FormDemandeLicenceAthletePromotionComponent} from './form/form-demande-licence-athlete-promotion/form-demande-licence-athlete-promotion.component';
import {FormDemandeLicenceAthleteComponent} from './form/form-demande-licence-athlete/form-demande-licence-athlete.component';
import {FormDemandeLicenceRunnerComponent} from './form/form-demande-licence-runner/form-demande-licence-runner.component';
import {FormDemandeLicenceMasterComponent} from './form/form-demande-licence-master/form-demande-licence-master.component';
import {NosDocumentsComponent} from './nos-documents/nos-documents.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ChampionnatComponent} from './competitions/championnat/championnat.component';

function MCompMasterComponent() {
}

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  {
    path: 'communiquee_for',
    component: CommuniqueeComponent,
  },
  {
    path: 'recordH',
    component: RecordHComponent,
  },
  {
    path: 'commissions',
    component: CommissionFederaleComponent,
  },
  {
    path: 'Formulaire_inscri',
    component: FormulaireComponent,
  },
  {
    path: 'player-list',
    component: PlayersComponent,
  },
  {
    path: 'reglements',
    component: ReglementsComponent,
  },

  {
    path: 'reglement',
    component: ReglementComponent,
  },
  {
    path: 'masters',
    component: CompMasterComponent,
  },
  {
    path: 'affiliated-clubs',
    component: AffiliatedClubsComponent
  },
  {
    path: 'nos-documents',
    component: NosDocumentsComponent,
  },
  {
    path: 'demande-affiliation',
    component: DemandeAffiliationComponent,
  },
  {
    path: 'demande-master',
    component: DemandeMasterComponent,
  },
  {
    path: 'licence-master',
    component: FormDemandeLicenceMasterComponent,
  },
  {
    path: 'licence-runner',
    component: FormDemandeLicenceRunnerComponent,
  },
  {
    path: 'licence-athlete',
    component: FormDemandeLicenceAthleteComponent,
  },
  {
    path: 'licence-athlete-promotion',
    component: FormDemandeLicenceAthletePromotionComponent,
  },
  {
    path: 'licence-dirigeant',
    component: FormDemandeLicenceDirigeantComponent,
  },
  {
    path: 'licence-entraineur',
    component: FormDemandeLicenceEntraineurComponent,
  },
  {
    path: 'bureau',
    component: BureauComponent,
  },
  {
    path: 'ligues',
    component: LiguesComponent,
  },
  {
    path: 'clubs',
    component: ClubsComponent,
  },
  {
    path: 'listeAthletes',
    component: PlayersComponent,
  },
  {
    path: 'liste_participant',
    component: ListeParticipantComponent,
  },
  {
    path: 'Programme',
    component: ProgrammeComponent,
  },
  {
    path: 'records_In',
    component: RecordinComponent,
  },
  {
    path: 'records',
    component: RecordComponent,
  },
  {
    path: 'Projet',
    component: ProjetComponent,
  },
  {
    path: 'Formation',
    component: FormationsComponent,
  },
  {
    path: 'records_Dame',
    component: RecordfemComponent,
  },
  {
    path: 'championnat',
    component: ChampionnatComponent,
  },
  {
    path: 'athlesante',
    component: AthlesanteComponent,
  },

  {
    path: 'team-list',
    component: TeamsComponent,
  },
  {
    path: 'player-list',
    component: PlayersComponent,
  },
  {
    path: 'single-player',
    component: SinglePlayerComponent,
  },
  {
    path: 'formation_20',
    component: Formation20Component,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: 'point-table',
    component: TablePointComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'champ_arabe20',
    component: Champarabe20Component,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'single-news',
    component: SingleNewsComponent,
  },
  {
    path: 'TopPlayers',
    component: TopplayerComponent,
  },
  {
    path: 'centre_de_formation',
    component: CentreDeFormationComponent,
  },
  {
    path: 'evenement',
    component: EvenementComponent,
  },
  {
    path: 'galerie',
    component: GallerieComponent,
  },
  {
    path: 'competition',
    component: ListCompComponent,
  },
  {
    path: 'competition/categories',
    component: CategoriesComponent,
  },
  {
    path: 'calendrier',
    component: ListCalComponent,
  },
  {
    path: 'competition/cross',
    component: CrossComponent,
  },
  {
    path: 'competition/benjamins',
    component: BenjaminMinimeComponent,
  },
  {
    path: 'competition/master',
    component: MasterComponent,
  },
  {
    path: 'competition/minimas',
    component: MinimasAthleteCibleComponent,
  },
  {
    path: 'competition/marche',
    component: MarcheComponent,
  },
  {
    path: 'competition/piste',
    component: PisteComponent,
  },
  {
    path: 'competition/championnatCross',
    component: ChampionnatCrossCountryComponent,
  },
  {
    path: 'competition/champEpreuveCombine',
    component: ChampionnatEprCombComponent,
  },
  {
    path: 'competition/criteriumHiver',
    component: CriteriumHiverComponent,
  },
  {
    path: 'competition/championnatPiste',
    component: ChampionnatSurPisteComponent,
  },
  {
    path: 'competition/championnatMarche',
    component: ChampionnatMarcheRouteComponent,
  },
  {
    path: 'galerie-detail/:id',
    component: GalerieDetailComponent,
  },
  {
    path: 'evenement-detail/:id',
    component: EvenementDetailComponent,
  },
  {
    path: 'single-player/:id',
    component: SinglePlayerComponent,
  },
  {
    path: 'player-list/:num',
    component: PlayersComponent,
  },
  {
    path: 'single-ligue/:id',
    component: SingleLigueComponent
  },
  {
    path: 'single-club/:id',
    component: SingleClubComponent,
  },
  {
    path: 'ChampTunMSRRades',
    component: ChampTunMSRradesComponent,
  },
  {
    path: 'ChampQuad',
    component: QuadriathlonComponent,
  },
  {
    path: 'Champ10000m',
    component: Champ10000mComponent,
  },
  {
    path: 'ChampHept',
    component: HeptathlonComponent,
  },
  {
    path: 'ChampDec',
    component: DecathlonComponent,
  },
  {
    path: 'ChampPiste',
    component: ChampPisteComponent,
  },
  {
    path: 'ChampTunMSRHam',
    component: ChampMSRHComponent,
  },
  {
    path: 'ChampAfrMaster',
    component: ChampAfr2019Component,
  },
  {
    path: 'ChampArC',
    component: ChampArCComponent,
  },
  {
    path: 'ChampCC',
    component: FinalCCComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
