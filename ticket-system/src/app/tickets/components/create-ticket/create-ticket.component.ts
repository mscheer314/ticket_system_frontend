import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  ticketForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  constructor(
    private ticketService: TicketService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let title = new FormControl();
    let description = new FormControl();

    this.ticketForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  public createTicket() {
    // let newTicket = new Ticket(
    //   formValues.title,
    //   formValues.description,
    //   new Date()
    // );

    // this.ticketService.create(newTicket);

    console.log(this.ticketForm.value);
  }

  cancel() {
    this.router.navigate(['/tickets']);
  }
}
