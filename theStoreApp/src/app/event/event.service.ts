import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  food_start_time: Time;
  food_end_time: Time;
}

export class EventService {
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
