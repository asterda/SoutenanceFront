import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurAjoutComponent } from './formateur-ajout.component';

describe('FormateurAjoutComponent', () => {
  let component: FormateurAjoutComponent;
  let fixture: ComponentFixture<FormateurAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
