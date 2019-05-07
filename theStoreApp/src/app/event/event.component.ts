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

  constructor(private eService: EventService) { }

  ngOnInit() {
    this.mockPosts();
    this.getActiveEvents();
  }

  getActiveEvents(): void {
    this.eService.getActiveEvents().subscribe((active_events: Event[]) => {
      this.events = active_events;
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
      eventName: ev_name,
      foodDesc: f_desc,
      startTime: f_start_time,
      endTime: f_end_time,
      glutenFree: gf_friendly,
      halal: h_friendly,
      kosher: k_friendly,
      vegan: vgn_friendly,
      vegetarian: vgtrn_friendly,
    };
    this.eService.postNewEvent(newEvent).subscribe(
      msg => console.log(msg)
    );
  }

  mockPosts() {
    this.postNewEvent('angiekneflin@xavier.edu', new Date(2019, 3, 18),
    'New food event! Woohoo!', 'Novel Food', true, true, true, true, true,
    'It\'s an all-vegetarian meal with various meat substitutes such as soy and tofu--with no gluten!',
    { hours: 15, minutes: 0 }, { hours: 16, minutes: 0 });
    this.postNewEvent('soondosmullaossman@xavier.edu', new Date(2019, 6, 10),
    'It is a culinary experience from Japan.', 'Japanese Culinary Excursion',
    false, true, true, false, false, 'The meal consists of a variety of kinds of sushi.',
    { hours: 11, minutes: 0 }, { hours: 13, minutes: 30 });
    this.postNewEvent('stephenbothwell@xavier.edu', new Date(2019, 4, 3),
    'A second pizza party! Awesome!', 'Super Pizza', false, true, true, true, true,
    'There will be a variety of kinds of pizza for various diets.', { hours: 12, minutes: 45 },
    { hours: 14, minutes: 45 });
  }
}
