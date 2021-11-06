import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerComponent } from './reviewer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReviewerDetailComponent } from './reviewer-detail/reviewer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewerRoutingModule,
    ComponentsModule
  ],
  declarations: [ReviewerComponent, ReviewerDetailComponent]
})
export class ReviewerModule { }
