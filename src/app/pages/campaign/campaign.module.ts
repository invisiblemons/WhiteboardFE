import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ComponentsModule
  ]
})
export class CampaignModule { }
