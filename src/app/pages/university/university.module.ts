import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UniversityComponent } from './university.component';


@NgModule({
  declarations: [UniversityComponent],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ComponentsModule
  ]
})
export class UniversityModule { }
