import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
  public ticket!: Ticket;
  private ticketSubscription!: Subscription;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTicket();
  }

  public getTicket(): void {
    this.ticketSubscription = this.ticketService
      .get(this.route.snapshot.params['id'])
      .subscribe((data: Ticket) => {
        console.log('This is my ticket: ', data);
        this.ticket = data;
      });

    console.log(
      'the log: ',
      this.ticketService.get(this.route.snapshot.params['id'])
    );
  }

  ngOnDestroy(): void {
    this.ticketSubscription.unsubscribe();
    console.log("I've been destroyed");
  }
}
