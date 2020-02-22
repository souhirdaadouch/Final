import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatSurPisteComponent } from './championnat-sur-piste.component';

describe('ChampionnatSurPisteComponent', () => {
  let component: ChampionnatSurPisteComponent;
  let fixture: ComponentFixture<ChampionnatSurPisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionnatSurPisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionnatSurPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
