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
    this.getTemplateEvent();
    // this.getActiveEvents();
  }

  getActiveEvents(): void {
    this.eService.getActiveEvents().subscribe((active_events: Event[]) => {
      this.events = active_events;
      // this.nextEvent = active_events.length + 1;
    });
  }

  // this is a mock get() item simply for display
  getTemplateEvent(): void {
    this.events = [];
    this.events.push({
      creatorEmail: 'angiekneflin@xavier.edu',
      eventDate: new Date(2019, 5, 5),
      eventDesc: 'This club is celebrating its anniversary with food!',
      eventName: 'Serious Business Dinner Club Anniversary',
      eventID: 0,
      foodDesc: 'It\'s a fancy steak dinner.',
      startTime: { hours: 19, minutes: 0 },
      endTime: { hours: 22, minutes: 45 },
      glutenFree: false,
      halal: false,
      kosher: false,
      vegan: false,
      vegetarian: false, });
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
