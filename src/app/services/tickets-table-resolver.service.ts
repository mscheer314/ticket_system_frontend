import { Injectable } from '@angular/core';

import { first } from 'rxjs/operators';
import { Ticket } from '../models/Ticket';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root',
})
export class TicketsTableResolverService  {
  constructor(private ticketService: TicketService) {}

  resolve() {
    // becuase this is a resolver, Angular automatically subscribes to the Observable that is returned by getTickets()
    return this.ticketService.getTickets().pipe(first());
  }
}
