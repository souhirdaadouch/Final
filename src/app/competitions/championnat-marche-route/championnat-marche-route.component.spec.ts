import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatMarcheRouteComponent } from './championnat-marche-route.component';

describe('ChampionnatMarcheRouteComponent', () => {
  let component: ChampionnatMarcheRouteComponent;
  let fixture: ComponentFixture<ChampionnatMarcheRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionnatMarcheRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionnatMarcheRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
