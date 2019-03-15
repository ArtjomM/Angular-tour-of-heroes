import { TestBed } from '@angular/core/testing';

import { InMemoryDataOfAbilityService } from './in-memory-data-of-ability.service';

describe('InMemoryDataOfAbilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataOfAbilityService = TestBed.get(InMemoryDataOfAbilityService);
    expect(service).toBeTruthy();
  });
});
