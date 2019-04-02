import { TestBed } from '@angular/core/testing';

import { EventDisplayService } from './event-display.service';

describe('EventDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventDisplayService = TestBed.get(EventDisplayService);
    expect(service).toBeTruthy();
  });
});
