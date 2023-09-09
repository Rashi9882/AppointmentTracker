import { TestBed } from '@angular/core/testing';

import { OffhoursServiceService } from './offhours-service.service';

describe('OffhoursServiceService', () => {
  let service: OffhoursServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffhoursServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
