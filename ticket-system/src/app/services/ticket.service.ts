import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Injectable({ providedIn: 'root' })
export class TicketService {
  apiServerUrl = 'http://localhost:8080/tickets';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiServerUrl);
  }

  get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiServerUrl}/${id}`);
  }

  // TODO how do I do this with out any?
  create(ticket: Ticket): Observable<any> {
    const url = `${this.apiServerUrl}/create`;

    console.log(url, ticket);
    return this.http.post<Ticket>(url, ticket);
  }
}
