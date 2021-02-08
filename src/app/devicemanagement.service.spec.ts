import { TestBed } from '@angular/core/testing';

import { DevicemanagementService } from './devicemanagement.service';

describe('DevicemanagementService', () => {
  let service: DevicemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
