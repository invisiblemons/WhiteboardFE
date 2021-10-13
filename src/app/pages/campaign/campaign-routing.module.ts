import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignComponent } from './campaign.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    data: {
      breadcrumb: 'campaign'
    },
    children: [
      {
        path: 'campaign-detail',
        component: CampaignDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
