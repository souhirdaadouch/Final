import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClubComponent } from './single-club.component';

describe('SingleClubComponent', () => {
  let component: SingleClubComponent;
  let fixture: ComponentFixture<SingleClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
