import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root',
})
export class TicketsTableResolverService implements Resolve<any> {
  constructor(private ticketService: TicketService) {}

  resolve() {
    // becuase this is a resolver, Angular automatically subscribes to the Observable that is returned by getTickets()
    return this.ticketService.getTickets();
  }
}
