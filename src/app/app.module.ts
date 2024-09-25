import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SortDirective } from './directives/sort.directive';
import { appRoutes } from './routes';
import { TicketResolverService } from './services/ticket-resolver.service';
import { TicketService } from './services/ticket.service';
import { TicketsTableResolverService } from './services/tickets-table-resolver.service';

@NgModule({ declarations: [
        AppComponent,
        CreateTicketComponent,
        TicketsTableComponent,
        TicketDetailsComponent,
        NavBarComponent,
        ErrorFourZeroFourComponent,
        SortDirective,
    ],
    bootstrap: [AppComponent], imports: [FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)], providers: [
        TicketService,
        TicketResolverService,
        TicketsTableResolverService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
