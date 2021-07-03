import { TicketRouteActivatorService } from './services/ticket-route-activator.service';
import { ErrorFourZeroFourComponent } from './components/error-four-zero-four/error-four-zero-four.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'tickets', component: TicketsTableComponent },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent,
    canActivate: [TicketRouteActivatorService],
  },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '404', component: ErrorFourZeroFourComponent },
];
