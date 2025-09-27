import { TestBed } from '@angular/core/testing';

import { AttibutesService } from './attributes.service';

describe('AttibutesService', () => {
  let service: AttibutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttibutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
