import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewDetailComponent } from './reviewer-detail/review-detail/review-detail.component';
import { ReviewerDetailComponent } from './reviewer-detail/reviewer-detail.component';
import {ReviewerComponent} from './reviewer.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewerComponent,
    data: {
      breadcrumb: 'reviewer'
    },
    children: [
      {
        path: 'reviewer-detail',
        component: ReviewerDetailComponent,
        children: [
          {
            path: 'review-detail',
            component: ReviewDetailComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerRoutingModule { }
