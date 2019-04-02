import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Event } from './event';

// Needs: replacement for messageService--probably has to do with
// logging?

@Injectable({
  providedIn: 'root'
})

export class EventDisplayService {
  private blogURL = 'api/events';

  constructor(private http: HttpClient) { }

  // change message to be more specific!
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.blogURL).pipe(tap(_ => this.log('Fetched events!')),
    catchError(this.handleError('getEvents', [])));
  }

  private log(message: string) {
    // this.messageService.add(`EventService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
