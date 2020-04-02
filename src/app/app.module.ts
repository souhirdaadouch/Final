import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TeamsComponent} from './teams/teams.component';
import {TablePointComponent} from './table-point/table-point.component';
import {ResultsComponent} from './results/results.component';
import {PlayersComponent} from './players/players.component';
import {RegisterComponent} from './register/register.component';
import {SingleNewsComponent} from './single-news/single-news.component';
import {SinglePlayerComponent} from './single-player/single-player.component';
import {GroupsComponent} from './groups/groups.component';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SitemapComponent} from './sitemap/sitemap.component';
import {NewsComponent} from './news/news.component';
import {FormationsComponent} from './formations/formations.component';
import {EngagementLicenseComponent} from './engagement-license/engagement-license.component';
import {StaticsComponent} from './statics/statics.component';
import {TopplayerComponent} from './topplayer/topplayer.component';
import {HttpClientModule} from '@angular/common/http';
import {AthlesanteComponent} from './athlesante/athlesante.component';
import {ProjetComponent} from './athlesante/projet/projet.component';
import {ProgrammeComponent} from './athlesante/programme/programme.component';
import {EngagementComponent} from './athlesante/engagement/engagement.component';
import {AgmCoreModule} from '@agm/core';
import {FormulaireComponent} from './formations/formulaire/formulaire.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommuniqueeComponent} from './formations/communiquee/communiquee.component';
import {ListeParticipantComponent} from './formations/liste-participant/liste-participant.component';
import {PlayerService} from './_service/serv_player';
import {RecordFemService} from './_service/recFem';
import {RecordInService} from './_service/recIn';
import {RecordComponent} from './home/record/record.component';
import {RecordinComponent} from './home/record/recordin/recordin.component';
import {RecordfemComponent} from './home/record/recordfem/recordfem.component';
import {RecordHComponent} from './home/record/record-h/record-h.component';
import {Formation20Component} from './formations/formation20/formation20.component';
import {Formation20Service} from './_service/form20';
import {RecordHService} from './_service/recHom';
import {StaticService} from './_service/stat';
import {Champarabe20Component} from './home/champarabe20/champarabe20.component';
import {CommissionDetailComponent} from './commission-federale/commission-detail/commission-detail.component';
import {CommissionFederaleComponent} from './commission-federale/commission-federale.component';
import {BureauComponent} from './bureau/bureau.component';
import {MemberComponent} from './bureau/member/member.component';
import {ClubsComponent} from './clubs/clubs.component';
import {ClubComponent} from './clubs/club/club.component';
import {SingleClubComponent} from './single-club/single-club.component';
import {LigueComponent} from './ligues/ligue/ligue.component';
import {LiguesComponent} from './ligues/ligues.component';
import {SingleLigueComponent} from './single-ligue/single-ligue.component';
import {FtaDetailComponent} from './presentation/fta-detail/fta-detail.component';
import {HistoriqueComponent} from './presentation/historique/historique.component';
import {PresentationDetailComponent} from './presentation/presentation-detail/presentation-detail.component';
import {PresentationComponent} from './presentation/presentation.component';
import {AffiliatedClubComponent} from './affiliated-clubs/affiliated-club/affiliated-club.component';
import {AffiliatedClubsComponent} from './affiliated-clubs/affiliated-clubs.component';
import {SharedComponent} from './shared/shared.component';
import {ItemplayerComponent} from './itemplayer/itemplayer.component';
import {PlayerpalmaresComponent} from './playerpalmares/playerpalmares.component';
import {PlayerperforComponent} from './playerperfor/playerperfor.component';
import {ReglementComponent} from './reglement/reglement.component';
import {ReglementsComponent} from './reglements/reglements.component';
import {CentreDeFormationComponent} from './centre-de-formation/centre-de-formation.component';
import {CentresListComponent} from './centre-de-formation/centres-list/centres-list.component';
import {CentresDetailComponent} from './centre-de-formation/centres-list/centres-detail/centres-detail.component';
import {EvenementComponent} from './evenement/evenement.component';
import {EvenementListComponent} from './evenement/evenement-list/evenement-list.component';
import {EvenementDetailComponent} from './evenement/evenement-detail/evenement-detail.component';
import {GalerieListComponent} from './galerie/galerie-list/galerie-list.component';
import {GallerieComponent} from './galerie/gallerie.component';
import {GalerieDetailComponent} from './galerie/galerie-detail/galerie-detail.component';
import {CoursemasterComponent} from './coursemaster/coursemaster.component';
import {CalendriermasterComponent} from './calendriermaster/calendriermaster.component';
import {PisteComponent} from './competitions/piste/piste.component';
import {TableRowComponent} from './competitions/table-row/table-row.component';
import {MinimasAthleteCibleComponent} from './competitions/minimas-athlete-cible/minimas-athlete-cible.component';
import {MasterComponent} from './competitions/master/master.component';
import {MarcheComponent} from './competitions/marche/marche.component';
import {ListCompComponent} from './competitions/list-comp/list-comp.component';
import {QualificationDetailsComponent} from './competitions/cross-country/qualification-details/qualification-details.component';
import {DistanceDetailsComponent} from './competitions/cross-country/distance-details/distance-details.component';
import {CrossComponent} from './competitions/cross-country/cross/cross.component';
import {CriteriumHiverComponent} from './competitions/criterium-hiver/criterium-hiver.component';
import {ReglementParticipationComponent} from './competitions/criterium-hiver/reglement-participation/reglement-participation.component';
import {CompDetailComponent} from './competitions/comp-detail/comp-detail.component';
import {ChampionnatSurPisteComponent} from './competitions/championnat-sur-piste/championnat-sur-piste.component';
import {ReglementSurPisteComponent} from './competitions/championnat-sur-piste/reglement-sur-piste/reglement-sur-piste.component';
import {ChampionnatMarcheRouteComponent} from './competitions/championnat-marche-route/championnat-marche-route.component';
import {ParticipationComponent} from './competitions/championnat-marche-route/participation/participation.component';
import {ChampionnatEprCombComponent} from './competitions/championnat-epr-comb/championnat-epr-comb.component';
import {PartEpCombComponent} from './competitions/championnat-epr-comb/part-ep-comb/part-ep-comb.component';
import {NotesChampEpCombComponent} from './competitions/championnat-epr-comb/notes-champ-ep-comb/notes-champ-ep-comb.component';
import {ChampionnatCrossCountryComponent} from './competitions/championnat-cross-country/championnat-cross-country.component';
import {CategoriesComponent} from './competitions/categories/categories.component';
import {BenjaminMinimeComponent} from './competitions/benjamin-minime/benjamin-minime.component';
import {PartPisteBenjaminComponent} from './competitions/benjamin-minime/part-piste-benjamin/part-piste-benjamin.component';
import {CaractHaiesComponent} from './competitions/benjamin-minime/caract-haies/caract-haies.component';
import {CalDetComponent} from './calendrier-competition/cal-det/cal-det.component';
import {ListCalComponent} from './calendrier-competition/list-cal/list-cal.component';
import {CompMasterComponent} from './comp-master/comp-master.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {TopPlayerService} from './_service/topPlayer';
import {EliteService} from './_service/Elite';
import {ChampTunMSRRadesService} from './_service/ChampTunMSRRades';
import {ChampECService} from './_service/ChampEC';
import {ChampMSRHammametService} from './_service/ChampMSRHammamet';
import {FinalCCGafsaService} from './_service/FinalCCGafsa';
import {ChAfrMasters2019Service} from './_service/ChAfrMasters2019';
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
import {EventService} from './_service/Event';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NosDocumentsComponent} from './nos-documents/nos-documents.component';
import {DemandeMasterComponent} from './nos-documents/demande-master/demande-master.component';
import {DemandeAffiliationComponent} from './nos-documents/demande-affiliation/demande-affiliation.component';
import {FormDemandeLicenceAthleteComponent} from './form/form-demande-licence-athlete/form-demande-licence-athlete.component';
import {FormDemandeLicenceAthletePromotionComponent} from './form/form-demande-licence-athlete-promotion/form-demande-licence-athlete-promotion.component';
import {FormDemandeLicenceDirigeantComponent} from './form/form-demande-licence-dirigeant/form-demande-licence-dirigeant.component';
import {FormDemandeLicenceEntraineurComponent} from './form/form-demande-licence-entraineur/form-demande-licence-entraineur.component';
import {FormDemandeLicenceMasterComponent} from './form/form-demande-licence-master/form-demande-licence-master.component';
import {FormDemandeLicenceRunnerComponent} from './form/form-demande-licence-runner/form-demande-licence-runner.component';
import {HeadingComponent} from './form/heading/heading.component';
import {NbComponent} from './form/nb/nb.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChampionnatComponent } from './competitions/championnat/championnat.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BureauComponent,
    MemberComponent,
    SingleClubComponent,
    LigueComponent,
    LiguesComponent,
    SingleLigueComponent,
    FtaDetailComponent,
    ReglementComponent,
    ReglementsComponent,
    EngagementComponent,
    HistoriqueComponent,
    PresentationDetailComponent,
    PresentationComponent,
    ClubsComponent,
    PlayerpalmaresComponent,
    PlayerperforComponent,
    ClubComponent,
    ItemplayerComponent,
    CentresDetailComponent,
    CentresListComponent,
    CentreDeFormationComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TeamsComponent,
    TablePointComponent,
    ResultsComponent,
    PlayersComponent,
    AffiliatedClubComponent,
    AffiliatedClubsComponent,
    RegisterComponent,
    SingleNewsComponent,
    SinglePlayerComponent,
    GroupsComponent,
    HomeComponent,
    ContactUsComponent,
    SitemapComponent,
    NewsComponent,
    PresentationComponent,
    FormationsComponent,
    EngagementLicenseComponent,
    StaticsComponent,
    TopplayerComponent,
    AthlesanteComponent,
    ProjetComponent,
    ProgrammeComponent,
    FormulaireComponent,
    CommuniqueeComponent,
    ListeParticipantComponent,
    SharedComponent,
    RecordComponent,
    RecordinComponent,
    RecordfemComponent,
    RecordHComponent,
    Formation20Component,
    Champarabe20Component,
    CommissionDetailComponent,
    CommissionFederaleComponent,
    EvenementComponent,
    EvenementListComponent,
    EvenementDetailComponent,
    GalerieListComponent,
    GallerieComponent,
    GalerieDetailComponent,
    CoursemasterComponent,
    CalendriermasterComponent,
    PisteComponent,
    TableRowComponent,
    MinimasAthleteCibleComponent,
    MasterComponent,
    MarcheComponent,
    ListCompComponent,
    QualificationDetailsComponent,
    DistanceDetailsComponent,
    CrossComponent,
    CriteriumHiverComponent,
    ReglementParticipationComponent,
    CompDetailComponent,
    ChampionnatSurPisteComponent,
    ReglementSurPisteComponent,
    ChampionnatMarcheRouteComponent,
    ParticipationComponent,
    ChampionnatEprCombComponent,
    PartEpCombComponent,
    NotesChampEpCombComponent,
    ChampionnatCrossCountryComponent,
    CategoriesComponent,
    BenjaminMinimeComponent,
    PartPisteBenjaminComponent,
    CaractHaiesComponent,
    CalDetComponent,
    ListCalComponent,
    CompMasterComponent,
    ChampTunMSRradesComponent,
    QuadriathlonComponent,
    Champ10000mComponent,
    HeptathlonComponent,
    DecathlonComponent,
    ChampPisteComponent,
    ChampMSRHComponent,
    ChampAfr2019Component,
    ChampArCComponent,
    FinalCCComponent,
    NosDocumentsComponent,
    DemandeMasterComponent,
    DemandeAffiliationComponent,
    FormDemandeLicenceAthleteComponent,
    FormDemandeLicenceAthletePromotionComponent,
    FormDemandeLicenceDirigeantComponent,
    FormDemandeLicenceEntraineurComponent,
    FormDemandeLicenceMasterComponent,
    FormDemandeLicenceRunnerComponent,
    HeadingComponent,
    NbComponent,
    WelcomeComponent,
    ChampionnatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDk0oH8fXWTediRd6cJs5ItnnW4Q7foiek'
    }),
    NgxPaginationModule
  ],
  providers: [
    PlayerService,
    RecordInService,
    RecordFemService,
    StaticService,
    RecordHService,
    Formation20Service,
    TopPlayerService,
    EliteService,
    ChampTunMSRRadesService,
    ChampECService,
    ChampMSRHammametService,
    FinalCCGafsaService,
    ChAfrMasters2019Service,
    EventService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
