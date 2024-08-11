import { TestBed } from '@angular/core/testing';

import { NamScvService } from './nam-scv.service';

describe('NamScvService', () => {
  let service: NamScvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamScvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
