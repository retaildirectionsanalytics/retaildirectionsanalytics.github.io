import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: 'operations',
    loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule)
  },
  {
    path: '',
    redirectTo:'sales'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
