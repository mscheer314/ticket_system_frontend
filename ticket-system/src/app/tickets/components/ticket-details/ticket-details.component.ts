import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
  public ticket: Ticket = {
    title: '',
    description: '',
  };

  private ticketSubscription!: Subscription;
  public ticketObservable!: Observable<Ticket>;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.ticketService.getTicket(+params['id']).subscribe((data) => {
        this.ticket = data;
      });
    });
  }

  deleteTicket() {
    this.ticketService.delete(this.ticket.id!).subscribe((result) => {
      this.router.navigate(['tickets']);
    });
  }

  ngOnDestroy(): void {
    this.ticketSubscription.unsubscribe();
    console.log("I've been destroyed");
  }

  goToTicketList() {
    this.router.navigate(['/tickets']);
  }
}
