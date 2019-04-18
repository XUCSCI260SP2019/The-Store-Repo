import { Time } from '@angular/common';

export class Event {
    event_creator: string;
    event_date: Date;
    event_desc: string;
    event_name: string;
    food_desc: string;
    // The Time class is an alias. It refers to a type containing
    // a number that is the hour (called hours)
    // and a number that is the minute (called minutes).
    food_start_time: Time;
    food_end_time: Time;
    // For the items below, "true" refers to being friendly to these food allergies.
    gluten_free_friendly: Boolean;
    halal_friendly: Boolean;
    kosher_friendly: Boolean;
    vegan_friendly: Boolean;
    vegetarian_friendly: Boolean;
}