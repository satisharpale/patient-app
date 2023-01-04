import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
    {
     path: '',
     redirectTo: 'tabs',
     pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
    {
    path: 'summary',
    loadChildren: () => import('./pages/patient-summary/patient-summary.module').then( m => m.PatientSummaryPageModule)
  },
  {
    path: 'visit-timeline',
    loadChildren: () => import('./pages/visit-timeline/visit-timeline.module').then( m => m.VisitTimelinePageModule)
  },
  {
    path: 'medical-history',
    loadChildren: () => import('./pages/medical-history/medical-history.module').then( m => m.MedicalHistoryPageModule)
  },
  {
    path: 'arv-treatment',
    loadChildren: () => import('./pages/arv-treatment/arv-treatment.module').then( m => m.ArvTreatmentPageModule)
  },
  {
    path: 'more-info',
    loadChildren: () => import('./pages/more-info/more-info.module').then( m => m.MoreInfoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
