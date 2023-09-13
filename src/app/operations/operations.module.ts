import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { StoreMetricDashboardComponent } from './store-metric-dashboard/store-metric-dashboard.component';
import { StoreCashManagementComponent } from './store-cash-management/store-cash-management.component';


@NgModule({
  declarations: [
    StoreMetricDashboardComponent,
    StoreCashManagementComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
