import { TestBed } from '@angular/core/testing';

import { DashboardDataMockService } from './dashboard-data-mock.service';

describe('DashboardDataMockService', () => {
  let service: DashboardDataMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDataMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
