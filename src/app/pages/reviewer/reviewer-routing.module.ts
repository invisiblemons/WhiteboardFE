import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReviewerComponent} from './reviewer.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewerComponent,
    data: {
      breadcrumb: 'reviewer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerRoutingModule { }
