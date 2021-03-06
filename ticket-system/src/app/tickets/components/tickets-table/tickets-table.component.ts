import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css'],
})
export class TicketsTableComponent implements OnInit {
  public tickets!: Ticket[];
  sortBy: string = 'createdOn';
  order = 'desc';
  visableTickets: Ticket[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tickets = this.route.snapshot.data['tickets'];
    this.visableTickets = this.tickets.slice(0);
  }
}
