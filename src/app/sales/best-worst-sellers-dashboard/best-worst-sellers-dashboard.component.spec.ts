import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWorstSellersDashboardComponent } from './best-worst-sellers-dashboard.component';

describe('BestWorstSellersDashboardComponent', () => {
  let component: BestWorstSellersDashboardComponent;
  let fixture: ComponentFixture<BestWorstSellersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestWorstSellersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestWorstSellersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
