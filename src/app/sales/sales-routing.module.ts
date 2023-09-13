import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesCurrentDashboardComponent } from './sales-current-dashboard/sales-current-dashboard.component';
import { SalesOverviewDashboardComponent } from './sales-overview-dashboard/sales-overview-dashboard.component';
import { TradeDashboardComponent } from './trade-dashboard/trade-dashboard.component';
import { BestWorstSellersDashboardComponent } from './best-worst-sellers-dashboard/best-worst-sellers-dashboard.component';

const routes: Routes = [
  { path: '',
  // eslint-disable-next-line max-len
  redirectTo: 'sales_current',
  data: {
      breadcrumb: 'Live Sales',
  } },
{
  path: 'sales_current',
  component: SalesCurrentDashboardComponent,
  data: {
    breadcrumb: 'Live',
  },
},
{
  path: 'sales_overview',
  component: SalesOverviewDashboardComponent,
  data: {
    breadcrumb: 'Weekly',
  },
},
{
  path: 'trade',
  component: TradeDashboardComponent,
  data: {
    breadcrumb: 'Trade Summary',
  },
},
{
  path: 'best_worst_sellers',
  component: BestWorstSellersDashboardComponent,
  data: {
    breadcrumb: 'Best/Worst Sellers',
  },
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
