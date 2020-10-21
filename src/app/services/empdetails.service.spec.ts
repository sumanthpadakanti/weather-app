import { TestBed } from '@angular/core/testing';

import { EmpdetailsService } from './empdetails.service';

describe('EmpdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpdetailsService = TestBed.get(EmpdetailsService);
    expect(service).toBeTruthy();
  });
});
