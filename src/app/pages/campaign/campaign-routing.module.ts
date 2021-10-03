import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    data: {
      breadcrumb: 'campaign'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
