import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionViewComponent } from './detection-view/detection-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: DetectionViewComponent 
  }
]

@NgModule({
  declarations: [DetectionViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetectionPageModule { }
