import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [AppComponent, CreateTicketComponent, ViewTicketsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TicketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
