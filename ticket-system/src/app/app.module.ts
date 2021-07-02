import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CreateTicketComponent, TicketsTableComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [TicketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
