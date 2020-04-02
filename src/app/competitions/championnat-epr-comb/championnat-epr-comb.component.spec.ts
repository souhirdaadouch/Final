import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatEprCombComponent } from './championnat-epr-comb.component';

describe('ChampionnatEprCombComponent', () => {
  let component: ChampionnatEprCombComponent;
  let fixture: ComponentFixture<ChampionnatEprCombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionnatEprCombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionnatEprCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
