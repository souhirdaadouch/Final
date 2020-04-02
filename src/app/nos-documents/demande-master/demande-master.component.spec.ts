import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMasterComponent } from './demande-master.component';

describe('DemandeMasterComponent', () => {
  let component: DemandeMasterComponent;
  let fixture: ComponentFixture<DemandeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
