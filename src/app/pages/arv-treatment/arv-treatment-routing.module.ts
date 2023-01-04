import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArvTreatmentPage } from './arv-treatment.page';

const routes: Routes = [
  {
    path: '',
    component: ArvTreatmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArvTreatmentPageRoutingModule {}
