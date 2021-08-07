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
  visableTickets: Ticket[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tickets = this.route.snapshot.data['tickets'];
    this.visableTickets = this.tickets.slice(0);
  }

  changeSort(sortedBy: String) {
    if (this.visableTickets) {
      switch (sortedBy) {
        case 'ticketNumber':
          this.visableTickets.sort(sortByTicketNumber);
          break;
        case 'title':
          console.log(this.visableTickets);
          this.visableTickets.sort(sortByTitle);
          console.table(this.visableTickets.sort(sortByTitle));
          break;
        case 'description':
          this.visableTickets.sort(sortByDescription);
          break;
        default:
          this.visableTickets.sort(sortByCreatedOn);
          break;
      }
    }
  }
}

function sortByCreatedOn(ticket1: Ticket, ticket2: Ticket) {
  const date1: Date = new Date(ticket1.createdOn || '1/1/1970');
  const date2: Date = new Date(ticket2.createdOn || '1/1/1970');

  return date1.getTime() - date2.getTime();
}

function sortByTicketNumber(ticket1: Ticket, ticket2: Ticket) {
  const id1: number = ticket1?.id || 0,
    id2 = ticket2.id || 0;
  return id1 - id2;
}

function sortByTitle(ticket1: Ticket, ticket2: Ticket) {
  console.log('In sortByTitle()');
  const title1: String = ticket1.title.toLocaleLowerCase(),
    title2: String = ticket2.title.toLocaleLowerCase();
  if (title1 > title2) return 1;
  if (title1 < title2) return -1;
  return 0;
}

function sortByDescription(ticket1: Ticket, ticket2: Ticket) {
  const desc1: String = ticket1.description.toLocaleLowerCase(),
    desc2: String = ticket2.description.toLocaleLowerCase();
  if (desc1 > desc2) return 1;
  if (desc1 < desc2) return -1;
  return 0;
}
