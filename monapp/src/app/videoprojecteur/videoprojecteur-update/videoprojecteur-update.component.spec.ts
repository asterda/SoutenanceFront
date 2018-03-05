import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurUpdateComponent } from './videoprojecteur-update.component';

describe('VideoprojecteurUpdateComponent', () => {
  let component: VideoprojecteurUpdateComponent;
  let fixture: ComponentFixture<VideoprojecteurUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
