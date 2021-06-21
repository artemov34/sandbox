import { TravelComponent } from './travel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessExpensesComponent } from './business-expenses/business-expenses.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: TravelComponent,
    children: [
      {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'business-expenses',
        component: BusinessExpensesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule {}
