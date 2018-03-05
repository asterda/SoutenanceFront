import { TestBed, inject } from '@angular/core/testing';

import { VideoprojecteurService } from './videoprojecteur.service';

describe('VideoprojecteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoprojecteurService]
    });
  });

  it('should be created', inject([VideoprojecteurService], (service: VideoprojecteurService) => {
    expect(service).toBeTruthy();
  }));
});
