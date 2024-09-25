import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  id: number;
  ticketForm: FormGroup;
  ticket: Ticket;
  title: FormControl;
  description: FormControl;
  isCreateMode: boolean;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.ticketForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
    });
    this.ticket = new Ticket(
      this.ticketForm.value.title,
      this.ticketForm.value.description
    );

    this.id = this.route.snapshot.params['id'];
    this.isCreateMode = !this.id;
  }

  ngOnInit(): void {
    if (!this.isCreateMode) {
      this.ticketService
        .getTicket(this.id)
        .pipe(first())
        .subscribe((x) => this.ticketForm.patchValue(x));
    }
    this.onValueChanges();
  }

  onValueChanges(): void {
    this.ticketForm.valueChanges.subscribe((val) => {
      this.ticket = val;
    });
  }

  public onSubmit() {
    this.ticketService
      .create(this.ticket)
      .subscribe((result) => this.goToTicketList());
  }

  goToTicketList() {
    this.router.navigate(['/tickets']);
  }
}
