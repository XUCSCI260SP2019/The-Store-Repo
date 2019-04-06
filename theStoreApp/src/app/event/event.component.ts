import { Component, OnInit } from '@angular/core';
import { Event } from './event.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
  events: Event[];

  constructor(private eService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eService.getEvents().subscribe(events => this.events = events);
  }
}
