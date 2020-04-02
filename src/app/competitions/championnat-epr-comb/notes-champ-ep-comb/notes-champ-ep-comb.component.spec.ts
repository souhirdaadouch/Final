import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesChampEpCombComponent } from './notes-champ-ep-comb.component';

describe('NotesChampEpCombComponent', () => {
  let component: NotesChampEpCombComponent;
  let fixture: ComponentFixture<NotesChampEpCombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesChampEpCombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesChampEpCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
