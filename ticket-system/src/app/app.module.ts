import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ErrorFourZeroFourComponent } from './components/error-four-zero-four/error-four-zero-four.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { appRoutes } from './routes';
import { TicketRouteActivatorService } from './services/ticket-route-activator.service';
import { TicketService } from './services/ticket.service';

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
  providers: [
    TicketService,
    TicketRouteActivatorService,
    // { provide: 'canDeactiveCreateTicket', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
