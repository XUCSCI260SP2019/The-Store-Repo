import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Event } from './event';

const server = environment.server;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '...' // fill in!
  })
};

// @Injectable is a decorator, so it must be adjacent to the class definition.
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getActiveEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(server + '/events').pipe(tap(_ => this.log('Fetched all active events!')),
    catchError(this.handleError('getActiveEvents', [])));
  }

  // What do we want the return type to be here? It seems to insist on "any[]"?
  postNewEvent(newEvent: Event): Observable<any[] | Event> {
    // should there be a new URL related to this?
    return this.http.post<Event>(server + '/events', newEvent, httpOptions).pipe(tap(_ => this.log('Posted a new event!')),
    catchError(this.handleError('postNewEvents', [])));
  }

  // Messages currently go to the console for the sake of testing.
  private log(message: string) {
    console.log(`EventService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
