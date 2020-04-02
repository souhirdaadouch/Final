import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartEpCombComponent } from './part-ep-comb.component';

describe('PartEpCombComponent', () => {
  let component: PartEpCombComponent;
  let fixture: ComponentFixture<PartEpCombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartEpCombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartEpCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
