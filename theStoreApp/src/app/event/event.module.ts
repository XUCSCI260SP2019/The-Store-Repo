import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [EventComponent],
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
    EventComponent
  ],
})
export class EventModule { }
