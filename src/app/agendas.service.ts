import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {
  private url = 'http://localhost:3000/agendas';

  constructor(private http: HttpClient) { }

  getAgendas(): Observable<agenda[]> {
    return this.http.get<agenda[]>(this.url);
}
}
