import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAjoutComponent } from './salle-ajout.component';

describe('SalleAjoutComponent', () => {
  let component: SalleAjoutComponent;
  let fixture: ComponentFixture<SalleAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
