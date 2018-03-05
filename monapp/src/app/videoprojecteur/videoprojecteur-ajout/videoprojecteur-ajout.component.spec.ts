import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurAjoutComponent } from './videoprojecteur-ajout.component';

describe('VideoprojecteurAjoutComponent', () => {
  let component: VideoprojecteurAjoutComponent;
  let fixture: ComponentFixture<VideoprojecteurAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
