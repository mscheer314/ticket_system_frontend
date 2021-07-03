import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { TicketService } from './ticket.service';

@Injectable()
export class TicketRouteActivatorService implements CanActivate {
  constructor(private ticketService: TicketService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.ticketService.get(+route.params['id']).subscribe((ticket) => {
      if (ticket == null) {
        this.router.navigate(['/404']);
      }
      return true;
    });
    return true;
  }
}
