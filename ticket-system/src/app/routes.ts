import { Routes } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ErrorFourZeroFourComponent } from './components/error-four-zero-four/error-four-zero-four.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { TicketRouteActivatorService } from './services/ticket-route-activator.service';
import { TicketsTableResolverService } from './services/tickets-table-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'tickets',
    component: TicketsTableComponent,
    resolve: { tickets: TicketsTableResolverService },
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent,
    canActivate: [TicketRouteActivatorService],
  },
  {
    path: 'create-ticket',
    component: CreateTicketComponent,
    // canDeactivate: ['canDeactiveCreateTicket'],
  },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '404', component: ErrorFourZeroFourComponent },
];
