import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverviewDashboardComponent } from './sales-overview-dashboard.component';

describe('SalesOverviewDashboardComponent', () => {
  let component: SalesOverviewDashboardComponent;
  let fixture: ComponentFixture<SalesOverviewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOverviewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOverviewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
