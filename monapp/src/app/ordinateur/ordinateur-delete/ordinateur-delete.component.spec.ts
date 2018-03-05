import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurDeleteComponent } from './ordinateur-delete.component';

describe('OrdinateurDeleteComponent', () => {
  let component: OrdinateurDeleteComponent;
  let fixture: ComponentFixture<OrdinateurDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
