import { TestBed } from '@angular/core/testing';

import { SegundoService } from './segundo.service';

describe('SegundoService', () => {
  let service: SegundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
