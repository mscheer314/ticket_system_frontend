import { Observable } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { TicketService } from './ticket.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

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
