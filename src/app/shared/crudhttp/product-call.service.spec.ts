import { TestBed } from '@angular/core/testing';

import { ProductCallService } from './product-call.service';

describe('ProductCallService', () => {
  let service: ProductCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
