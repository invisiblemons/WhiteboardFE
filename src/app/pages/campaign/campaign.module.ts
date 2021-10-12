import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CampaignComponent } from './campaign.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
@NgModule({
  declarations: [CampaignComponent, CampaignDetailComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CampaignModule { }
