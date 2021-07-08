import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Injectable({ providedIn: 'root' })
export class TicketService {
  apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiServerUrl}/tickets`);
  }

  get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiServerUrl}/tickets/${id}`);
  }

  // TODO how do I do this with out any?
  create(data: Ticket): Observable<any> {
    return this.http.post(this.apiServerUrl, data);
  }
}
