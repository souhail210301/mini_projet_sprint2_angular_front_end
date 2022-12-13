import { TestBed } from '@angular/core/testing';

import { ActeurGuard } from './acteur.guard';

describe('ActeurGuard', () => {
  let guard: ActeurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActeurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
