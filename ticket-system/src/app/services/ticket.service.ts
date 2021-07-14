import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ticket } from '../models/Ticket';

@Injectable({ providedIn: 'root' })
export class TicketService {
  apiServerUrl = 'http://localhost:8080/tickets';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http
      .get<Ticket[]>(this.apiServerUrl)
      .pipe(catchError(this.handleError<Ticket[]>('getTickets', [])));
  }

  getTicket(id: number): Observable<Ticket> {
    console.log();

    return this.http
      .get<Ticket>(`${this.apiServerUrl}/${id}`)
      .pipe(catchError(this.handleError<Ticket>('getTicket')));
  }

  public create(ticket: Ticket) {
    const url = `${this.apiServerUrl}/create`;

    return this.http.post<Ticket>(url, ticket);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
