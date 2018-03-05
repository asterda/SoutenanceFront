import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurDeleteComponent } from './formateur-delete.component';

describe('FormateurDeleteComponent', () => {
  let component: FormateurDeleteComponent;
  let fixture: ComponentFixture<FormateurDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
