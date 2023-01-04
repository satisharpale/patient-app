import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientSummaryPageRoutingModule } from './patient-summary-routing.module';

import { PatientSummaryPage } from './patient-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientSummaryPageRoutingModule
  ],
  declarations: [PatientSummaryPage]
})
export class PatientSummaryPageModule {}
