import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  ticketForm!: FormGroup;
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    let title = new FormControl();
    let description = new FormControl();
    this.ticketForm = new FormGroup({
      title: title,
      description: description,
    });
  }

  public createTicket() {
    // this.ticketService.create(new Ticket());
  }
}
