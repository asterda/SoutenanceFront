import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurAjoutComponent } from './ordinateur-ajout.component';

describe('OrdinateurAjoutComponent', () => {
  let component: OrdinateurAjoutComponent;
  let fixture: ComponentFixture<OrdinateurAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
