import { Time } from '@angular/common';

export class Event {
    event_creator: string;
    event_date: Date;
    event_desc: string;
    event_name: string;
    food_allergy_booleans: Array<Boolean>[5];
    food_desc: string;
    food_start_time: Time;
    food_end_time: Time;
}
