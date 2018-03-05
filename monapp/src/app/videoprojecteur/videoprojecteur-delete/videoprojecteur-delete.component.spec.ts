import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurDeleteComponent } from './videoprojecteur-delete.component';

describe('VideoprojecteurDeleteComponent', () => {
  let component: VideoprojecteurDeleteComponent;
  let fixture: ComponentFixture<VideoprojecteurDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
