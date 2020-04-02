import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniqueeComponent } from './communiquee.component';

describe('CommuniqueeComponent', () => {
  let component: CommuniqueeComponent;
  let fixture: ComponentFixture<CommuniqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuniqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuniqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
