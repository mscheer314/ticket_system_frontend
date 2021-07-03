import { TestBed } from '@angular/core/testing';

import { TicketsTableResolverService } from './tickets-table-resolver.service';

describe('TicketsTableResolverService', () => {
  let service: TicketsTableResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsTableResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
