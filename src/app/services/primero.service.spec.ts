import { TestBed } from '@angular/core/testing';

import { PrimeroService } from './primero.service';

describe('PrimeroService', () => {
  let service: PrimeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
