import { TestBed } from '@angular/core/testing';

import { GauthenticationGuard } from './gauthentication.guard';

describe('GauthenticationGuard', () => {
  let guard: GauthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GauthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
