import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    EventComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventComponent,
      }
    ])
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
