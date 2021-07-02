import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CreateTicketComponent,
    TicketsTableComponent,
    TicketDetailsComponent,
    AuthenticationButtonComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
