import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Event } from './event';
import { ObservableMessage } from '../shared/observableMessage.model';

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

  postNewEvent(newEvent: Event): Observable<ObservableMessage> {
    // [NOTE]: should there be a new URL related to this?
    const oMsg: ObservableMessage = { success: false, success_message: '' };
    return this.http.post<Event>(server + '/events',
    newEvent,
    httpOptions).pipe(
        map(_ => {
          oMsg.success = true;
          oMsg.success_message = 'New event successfully posted!';
          return oMsg; }),
          catchError((err: HttpErrorResponse) => {
            if(err.error instanceof Error) {
              oMsg.success_message = err.error.message;
            } else {
              oMsg.success_message = err.error.status + ': ' + err.error.message;
            }
            return of(oMsg);
          }));
  }

  getEventCount(): Promise<number> {
    // [NOTE]: will likely want some error-catching in here.
    return this.http.get<number>(server + '/events').toPromise();
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
