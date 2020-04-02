import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractHaiesComponent } from './caract-haies.component';

describe('CaractHaiesComponent', () => {
  let component: CaractHaiesComponent;
  let fixture: ComponentFixture<CaractHaiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaractHaiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractHaiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
