import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientSummaryPage } from './patient-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PatientSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientSummaryPageRoutingModule {}
