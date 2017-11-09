import { TestBed, inject } from '@angular/core/testing';

import { ServicesDataService } from './services-data.service';

describe('ServicesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesDataService]
    });
  });

  it('should be created', inject([ServicesDataService], (service: ServicesDataService) => {
    expect(service).toBeTruthy();
  }));
});
