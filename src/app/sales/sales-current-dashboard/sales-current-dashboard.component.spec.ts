import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCurrentDashboardComponent } from './sales-current-dashboard.component';

describe('SalesCurrentDashboardComponent', () => {
  let component: SalesCurrentDashboardComponent;
  let fixture: ComponentFixture<SalesCurrentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCurrentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCurrentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
