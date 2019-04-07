import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const server = environment.server;

// Needs: replacement for messageService--probably has to do with
// logging?

@Injectable({
  providedIn: 'root'
})

export class Event {
  event_creator: string;
  event_date: Date;
  event_desc: string;
  event_name: string;
  // Note: order of Booleans is Gluten-Free, Halal, Kosher, Vegan, and Vegetarian.
  // Furthermore, "true" refers to being friendly to these food allergies.
  food_allergy_booleans: Array<Boolean>[5];
  food_desc: string;
  // The Time class is an alias. It refers to a type containing
  // a number that is the hour (called hours)
  // and a number that is the minute (called minutes).
  food_start_time: Time;
  food_end_time: Time;
}

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
