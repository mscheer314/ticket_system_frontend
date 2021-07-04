import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  CreateTicketComponent,
  ErrorFourZeroFourComponent,
  NavBarComponent,
  TicketDetailsComponent,
  TicketsTableComponent,
} from './components/index';
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
