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
        default:
          this.visableTickets.sort(sortByCreatedOn);
          break;
      }
    }
  }
}

function sortByCreatedOn(ticket1: Ticket, ticket2: Ticket) {
  if (!ticket1.createdOn > !ticket2.createdOn) return 1;
  else if (!ticket1.createdOn === !ticket2.createdOn) return 0;
  else return -1;
}

function sortByTicketNumber(ticket1: Ticket, ticket2: Ticket) {
  // if (typeof ticket1 !== 'undefined' && typeof ticket2 !== 'undefined') {
  // return ticket1?.id - ticket2?.id;
  // }

  // START HERE. THIS SORT DOES NOT SHOW IN THE UI. I'M NOT SURE THAT THIS SORT
  // FUNCTION IS WORKING OR IT THERE IS SOME OTHER ISSUE.

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
