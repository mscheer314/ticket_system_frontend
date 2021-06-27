import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'tickets', component: TicketsTableComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
];
