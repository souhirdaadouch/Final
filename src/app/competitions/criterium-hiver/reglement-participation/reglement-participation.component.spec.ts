import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementParticipationComponent } from './reglement-participation.component';

describe('ReglementParticipationComponent', () => {
  let component: ReglementParticipationComponent;
  let fixture: ComponentFixture<ReglementParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
