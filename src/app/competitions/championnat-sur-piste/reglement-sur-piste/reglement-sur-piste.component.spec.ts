import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementSurPisteComponent } from './reglement-sur-piste.component';

describe('ReglementSurPisteComponent', () => {
  let component: ReglementSurPisteComponent;
  let fixture: ComponentFixture<ReglementSurPisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementSurPisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementSurPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
