import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TicketService } from './ticket.service';

@Injectable()
export class TicketResolverService implements Resolve<any> {
  constructor(private ticketService: TicketService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.ticketService.getTicket(route.params['id']);
  }
}
