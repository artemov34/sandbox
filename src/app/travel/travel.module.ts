import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './../shared/shared.module';
import { TravelRoutingModule } from './travel-routing.module';

import { TravelComponent } from './travel.component';
import { InboxComponent } from './inbox/inbox.component';
import { BusinessExpensesComponent } from './business-expenses/business-expenses.component';

@NgModule({
  imports: [TravelRoutingModule, FormsModule, SharedModule, TranslateModule.forRoot()],
  declarations: [TravelComponent, InboxComponent, BusinessExpensesComponent],
  providers: []
})
export class TravelModule {}
