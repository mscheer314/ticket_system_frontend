import { TestBed } from '@angular/core/testing';

import { TicketRouteActivatorService } from './ticket-route-activator.service';

describe('TicketRouteActivatorService', () => {
  let service: TicketRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
