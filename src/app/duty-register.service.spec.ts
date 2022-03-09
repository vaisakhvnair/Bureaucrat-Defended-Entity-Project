import { TestBed } from '@angular/core/testing';

import { DutyRegisterService } from './duty-register.service';

describe('DutyRegisterService', () => {
  let service: DutyRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DutyRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
