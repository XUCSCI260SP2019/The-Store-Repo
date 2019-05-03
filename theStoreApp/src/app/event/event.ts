import { Time } from '@angular/common';

export class Event {
    creatorEmail: string;
    eventDate: Date;
    eventDesc: string;
    eventName: string;
    eventID: number;
    foodDesc: string;
    // The Time class is an alias. It refers to a type containing
    // a number that is the hour (called hours)
    // and a number that is the minute (called minutes).
    startTime: Time;
    endTime: Time;
    // For the items below, "true" refers to being friendly to these food allergies.
    glutenFree: Boolean;
    halal: Boolean;
    kosher: Boolean;
    vegan: Boolean;
    vegetarian: Boolean;
}