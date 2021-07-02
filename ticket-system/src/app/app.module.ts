import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    TicketsTableComponent,
    TicketDetailsComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    AuthenticationButtonComponent,
    NavBarComponent,
    FooterComponent,
    LoadingComponent,
    AuthNavComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AuthModule.forRoot({
      ...environment.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
