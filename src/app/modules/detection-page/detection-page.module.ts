import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionViewComponent } from './components/detection-view/detection-view.component';
import { Routes, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    RouterModule.forChild(routes),
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class DetectionPageModule { }
