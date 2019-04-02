import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventDisplayService } from '../event-display.service';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss'],
})
export class EventDisplayComponent implements OnInit {
  events: Event[];

  constructor(private eDService: EventDisplayService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eDService.getEvents().subscribe(events => this.events = events);
  }

}
