import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root',
})
export class TicketsTableResolverService implements Resolve<any> {
  constructor(private ticketService: TicketService) {}

  resolve() {
    return this.ticketService.getTickets().pipe(map((tickets) => tickets));
  }
}
