import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitTimelinePageRoutingModule } from './visit-timeline-routing.module';

import { VisitTimelinePage } from './visit-timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitTimelinePageRoutingModule
  ],
  declarations: [VisitTimelinePage]
})
export class VisitTimelinePageModule {}
