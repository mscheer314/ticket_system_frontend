import { Routes } from '@angular/router';
import { ErrorFourZeroFourComponent } from './components/error-four-zero-four/error-four-zero-four.component';
import { TicketResolverService } from './services/ticket-resolver.service';
import { TicketsTableResolverService } from './services/tickets-table-resolver.service';
import { CreateTicketComponent } from './tickets/components/create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './tickets/components/ticket-details/ticket-details.component';
import { TicketsTableComponent } from './tickets/components/tickets-table/tickets-table.component';

export const appRoutes: Routes = [
  {
    path: 'tickets',
    component: TicketsTableComponent,
    resolve: { tickets: TicketsTableResolverService },
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent,
    resolve: { ticket: TicketResolverService },
  },
  {
    path: 'create-ticket',
    component: CreateTicketComponent,
    // canDeactivate: ['canDeactiveCreateTicket'],
  },
  { path: 'create-ticket/:id', component: CreateTicketComponent },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '404', component: ErrorFourZeroFourComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
];
