import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    SharedModule
  ]
})
export class CampaignModule { }
