import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    SharedModule
  ]
})
export class UniversityModule { }
