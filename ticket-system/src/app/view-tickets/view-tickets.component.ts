import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Ticket } from '../models/Ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css'],
})
export class ViewTicketsComponent implements OnInit {
  public tickets!: Ticket[];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getTickets();
  }

  public getTickets(): void {
    this.ticketService.getTickets().subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
        console.dir(this.tickets);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
