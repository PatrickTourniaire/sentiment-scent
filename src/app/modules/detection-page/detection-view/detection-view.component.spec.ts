import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionViewComponent } from './detection-view.component';

describe('DetectionViewComponent', () => {
  let component: DetectionViewComponent;
  let fixture: ComponentFixture<DetectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
