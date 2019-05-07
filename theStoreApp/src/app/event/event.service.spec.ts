import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  const service: EventService = TestBed.get(EventService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getActiveEvents() returning events', (done: DoneFn) => {
    console.log('Tested getActiveEvents().');
    service.getActiveEvents().subscribe(newEvents => {
    expect(newEvents).toBeTruthy();
    // Is that the best predicate for testing? Could this be more specific?
    done();
    });
  });

  it('should have getEventCount() returning a nonzero value in its Promise<number>', (done: DoneFn) => {
    console.log('Tested getEventCount().');
    // Karma is complaining that this cannot call a .then() within a sync request. Why?
    // The Angular documentation seems to do it just fine.
    service.getEventCount().then(num => {
      expect(num).toBeGreaterThan(0);
    });
    done();
  });
});
