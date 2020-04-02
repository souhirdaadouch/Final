import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatCrossCountryComponent } from './championnat-cross-country.component';

describe('ChampionnatCrossCountryComponent', () => {
  let component: ChampionnatCrossCountryComponent;
  let fixture: ComponentFixture<ChampionnatCrossCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionnatCrossCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionnatCrossCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
