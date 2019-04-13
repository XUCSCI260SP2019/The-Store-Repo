import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Event } from './event';

const server = environment.server;

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

  // Stephen: For now, I have moved the messages to the console for the sake of testing.
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
