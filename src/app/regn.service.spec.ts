import { TestBed, inject } from '@angular/core/testing';

import { RegnService } from './regn.service';

describe('RegnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegnService]
    });
  });

  it('should be created', inject([RegnService], (service: RegnService) => {
    expect(service).toBeTruthy();
  }));
});
