import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from "../../components/components.module";
import { DashboardComponent } from './dashboard.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardComponent, ReviewDetailComponent]
})
export class DashboardModule {}
