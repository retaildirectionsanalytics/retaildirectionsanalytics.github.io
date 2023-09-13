import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesCurrentDashboardComponent } from './sales-current-dashboard/sales-current-dashboard.component';
import { SalesOverviewDashboardComponent } from './sales-overview-dashboard/sales-overview-dashboard.component';
import { TradeDashboardComponent } from './trade-dashboard/trade-dashboard.component';
import { BestWorstSellersDashboardComponent } from './best-worst-sellers-dashboard/best-worst-sellers-dashboard.component';


@NgModule({
  declarations: [
    SalesCurrentDashboardComponent,
    SalesOverviewDashboardComponent,
    TradeDashboardComponent,
    BestWorstSellersDashboardComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
