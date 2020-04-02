import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartPisteBenjaminComponent } from './part-piste-benjamin.component';

describe('PartPisteBenjaminComponent', () => {
  let component: PartPisteBenjaminComponent;
  let fixture: ComponentFixture<PartPisteBenjaminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartPisteBenjaminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartPisteBenjaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
