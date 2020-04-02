import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigueComponent } from './ligue.component';

describe('LigueComponent', () => {
  let component: LigueComponent;
  let fixture: ComponentFixture<LigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
