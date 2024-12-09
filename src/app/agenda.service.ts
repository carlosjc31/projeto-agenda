import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private url = 'http://localhost:3000/agenda';

  constructor(private http: HttpClient) { }

  getAgenda(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

  delete(agenda: Agenda): Observable<void> {
    return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }

}
