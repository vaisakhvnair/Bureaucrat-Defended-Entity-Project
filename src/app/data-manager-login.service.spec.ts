import { TestBed } from '@angular/core/testing';

import { DataManagerLoginService } from './data-manager-login.service';

describe('DataManagerLoginService', () => {
  let service: DataManagerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManagerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
