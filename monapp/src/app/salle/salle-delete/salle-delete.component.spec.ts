import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDeleteComponent } from './salle-delete.component';

describe('SalleDeleteComponent', () => {
  let component: SalleDeleteComponent;
  let fixture: ComponentFixture<SalleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
