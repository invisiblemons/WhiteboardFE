import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversityComponent } from './university.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent,
    data: {
      breadcrumb: 'university'
    },
    children: [
      {
        path: 'university-detail',
        component: UniversityDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
