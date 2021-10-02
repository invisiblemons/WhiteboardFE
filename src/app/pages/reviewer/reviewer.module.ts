import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerComponent } from './reviewer.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReviewerRoutingModule,
    SharedModule
  ],
  declarations: [ReviewerComponent]
})
export class ReviewerModule { }
