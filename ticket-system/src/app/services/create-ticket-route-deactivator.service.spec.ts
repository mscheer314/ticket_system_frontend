import { TestBed } from '@angular/core/testing';

import { CreateTicketRouteDeactivatorService } from './create-ticket-route-deactivator.service';

describe('CreateTicketRouteDeactivatorService', () => {
  let service: CreateTicketRouteDeactivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTicketRouteDeactivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
