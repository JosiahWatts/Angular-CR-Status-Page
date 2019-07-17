import { TestBed } from '@angular/core/testing';

import { IncidentService } from './incident.service';

describe('IncidentstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidentService = TestBed.get(IncidentService);
    expect(service).toBeTruthy();
  });
});
