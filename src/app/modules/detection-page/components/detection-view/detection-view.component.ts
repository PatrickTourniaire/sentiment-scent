import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-detection-view',
  templateUrl: './detection-view.component.html',
  styleUrls: ['./detection-view.component.sass']
})
export class DetectionViewComponent implements OnInit {

  detectionModels = new FormControl();

  detectionModelsList: string[] = ['ResNet 50', 'CNN'];

  constructor() { }

  ngOnInit(): void {
  }

}
