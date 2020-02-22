import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriumHiverComponent } from './criterium-hiver.component';

describe('CriteriumHiverComponent', () => {
  let component: CriteriumHiverComponent;
  let fixture: ComponentFixture<CriteriumHiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriumHiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriumHiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
