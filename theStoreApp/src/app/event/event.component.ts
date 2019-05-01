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
  private nextEvent: number;

  constructor(private eService: EventService) { }

  ngOnInit() {
    this.getActiveEvents();
  }

  getActiveEvents(): void {
    this.eService.getActiveEvents().subscribe((active_events: Event[]) => {
      this.events = active_events;
      this.nextEvent = active_events.length + 1;
    });
  }

  postNewEvent(ev_creator: string, ev_date: Date,
    ev_desc: string, ev_name: string, gf_friendly: Boolean,
    h_friendly: Boolean, k_friendly: Boolean,
    vgn_friendly: Boolean, vgtrn_friendly: Boolean,
    f_desc: string, f_start_time: Time, f_end_time: Time): void {
    const newEvent: Event = {
      event_creator: ev_creator,
      event_date: ev_date,
      event_desc: ev_desc,
      event_id: this.nextEvent,
      event_name: ev_name,
      food_desc: f_desc,
      food_start_time: f_start_time,
      food_end_time: f_end_time,
      gluten_free_friendly: gf_friendly,
      halal_friendly: h_friendly,
      kosher_friendly: k_friendly,
      vegan_friendly: vgn_friendly,
      vegetarian_friendly: vgtrn_friendly,
    }
    this.eService.postNewEvent(newEvent);
  }
}
