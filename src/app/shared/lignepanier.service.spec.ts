import { TestBed, inject } from '@angular/core/testing';

import { LignepanierService } from './lignepanier.service';

describe('LignepanierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LignepanierService]
    });
  });

  it('should be created', inject([LignepanierService], (service: LignepanierService) => {
    expect(service).toBeTruthy();
  }));
});
