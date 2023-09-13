import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreMetricDashboardComponent } from './store-metric-dashboard/store-metric-dashboard.component';
import { StoreCashManagementComponent } from './store-cash-management/store-cash-management.component';

const routes: Routes = [
  {
    path: '',
    // eslint-disable-next-line max-len
    redirectTo: 'store_metrics',
    pathMatch: 'full',
    data: {
      breadcrumb: '',
    }
  },
  {
    path: 'store_metrics',
    component: StoreMetricDashboardComponent,
    data: {
      breadcrumb: 'Store Metrics',
    },
  },
  {
    path: 'store_cash_management',
    component: StoreCashManagementComponent,
    data: {
      breadcrumb: 'Store Cash Management',
    },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
