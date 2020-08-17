import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';

import { StartViewComponent } from './components/start-view/start-view.component';

const routes: Routes = [
  {
    path: '',
    component: StartViewComponent
  }
];

@NgModule({
  declarations: [StartViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class LandingPageModule { }
