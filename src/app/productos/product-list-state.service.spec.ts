import { TestBed } from '@angular/core/testing';

import { ProductListStateService } from './product-list-state.service';

describe('ProductListStateService', () => {
  let service: ProductListStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
