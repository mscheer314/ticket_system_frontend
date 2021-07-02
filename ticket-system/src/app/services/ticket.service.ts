import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketService {
  apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiServerUrl}/tickets`);
  }

  public get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiServerUrl}/tickets/${id}`);
  }
}
