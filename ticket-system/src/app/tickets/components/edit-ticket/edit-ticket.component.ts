import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from './../../../services/ticket.service';
@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  ticket: Ticket = {
    title: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.ticketService.getTicket(+params['id']).subscribe((data) => {
        this.ticket = data;
      });
    });
  }
}
