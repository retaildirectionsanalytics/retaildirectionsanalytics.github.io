import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMetricDashboardComponent } from './store-metric-dashboard.component';

describe('StoreMetricDashboardComponent', () => {
  let component: StoreMetricDashboardComponent;
  let fixture: ComponentFixture<StoreMetricDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMetricDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreMetricDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
