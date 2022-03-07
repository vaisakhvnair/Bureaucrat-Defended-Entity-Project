import { TestBed } from '@angular/core/testing';

import { FIRService } from './fir.service';

describe('FIRService', () => {
  let service: FIRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FIRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
