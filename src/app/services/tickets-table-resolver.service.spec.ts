import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TicketsTableResolverService } from './tickets-table-resolver.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('TicketsTableResolverService', () => {
  let service: TicketsTableResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(TicketsTableResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
