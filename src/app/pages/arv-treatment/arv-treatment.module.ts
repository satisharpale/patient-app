import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArvTreatmentPageRoutingModule } from './arv-treatment-routing.module';

import { ArvTreatmentPage } from './arv-treatment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArvTreatmentPageRoutingModule
  ],
  declarations: [ArvTreatmentPage]
})
export class ArvTreatmentPageModule {}
