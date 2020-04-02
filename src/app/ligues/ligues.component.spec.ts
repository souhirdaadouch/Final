import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiguesComponent } from './ligues.component';

describe('LiguesComponent', () => {
  let component: LiguesComponent;
  let fixture: ComponentFixture<LiguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
