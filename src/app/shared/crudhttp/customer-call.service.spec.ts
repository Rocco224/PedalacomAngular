import { TestBed } from '@angular/core/testing';

import { CustomerCallService } from './customer-call.service';

describe('CustomerCallService', () => {
  let service: CustomerCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
