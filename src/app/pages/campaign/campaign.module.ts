import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CampaignComponent } from './campaign.component';
@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ComponentsModule
  ]
})
export class CampaignModule { }
