import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'tickets', component: TicketsTableComponent },
  { path: 'tickets/:id', component: TicketDetailsComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
];
