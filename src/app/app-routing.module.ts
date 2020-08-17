import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'detect',
    loadChildren: () => import('src/app/modules/detection-page/detection-page.module').then(m => m.DetectionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
