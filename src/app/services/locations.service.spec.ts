import { TestBed } from '@angular/core/testing';

import { LocationsService } from './locations.service';

describe('LocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsService = TestBed.get(LocationsService);
    expect(service).toBeTruthy();
  });
});
