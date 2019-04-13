import { Time } from '@angular/common';

export class Event {
    event_creator: string;
    event_date: Date;
    event_desc: string;
    event_name: string;
    // Note: order of Booleans is Gluten-Free, Halal, Kosher, Vegan, and Vegetarian.
    // Furthermore, "true" refers to being friendly to these food allergies.
    food_allergy_booleans: Array<Boolean>[5];
    food_desc: string;
    // The Time class is an alias. It refers to a type containing
    // a number that is the hour (called hours)
    // and a number that is the minute (called minutes).
    food_start_time: Time;
    food_end_time: Time;
}