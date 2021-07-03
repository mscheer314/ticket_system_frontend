import { TicketRouteActivatorService } from './services/ticket-route-activator.service';
import { TicketService } from './services/ticket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { ErrorFourZeroFourComponent } from './components/error-four-zero-four/error-four-zero-four.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    TicketsTableComponent,
    TicketDetailsComponent,
    NavBarComponent,
    ErrorFourZeroFourComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [TicketService, TicketRouteActivatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
