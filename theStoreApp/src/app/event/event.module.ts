import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventComponent } from './event.component';
import { EventService } from './event.service';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [
    EventComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule,
  ],
  exports: [
    EventComponent,
  ],
  providers:
  [
    EventService
  ],
})
export class EventModule { }
