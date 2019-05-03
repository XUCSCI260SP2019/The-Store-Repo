import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  events: Event[];
  // private nextEvent: number;

  constructor(private eService: EventService) { }

  ngOnInit() {
    this.getActiveEvents();
  }

  getActiveEvents(): void {
    this.eService.getActiveEvents().subscribe((active_events: Event[]) => {
      this.events = active_events;
      // this.nextEvent = active_events.length + 1;
    });
  }

  postNewEvent(ev_creator: string, ev_date: Date,
    ev_desc: string, ev_name: string, gf_friendly: Boolean,
    h_friendly: Boolean, k_friendly: Boolean,
    vgn_friendly: Boolean, vgtrn_friendly: Boolean,
    f_desc: string, f_start_time: Time, f_end_time: Time): void {
    const newEvent: Event = {
      creatorEmail: ev_creator,
      eventDate: ev_date,
      eventDesc: ev_desc,
      eventID: parseInt(this.eService.getEventCount().toString(), 10), // this.nextEvent,
      eventName: ev_name,
      foodDesc: f_desc,
      startTime: f_start_time,
      endTime: f_end_time,
      glutenFree: gf_friendly,
      halal: h_friendly,
      kosher: k_friendly,
      vegan: vgn_friendly,
      vegetarian: vgtrn_friendly,
    }
    this.eService.postNewEvent(newEvent);
  }
}
