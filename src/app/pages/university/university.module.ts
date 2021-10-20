import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UniversityComponent } from './university.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UniversityDetailComponent } from './university-detail/university-detail.component';


@NgModule({
  declarations: [UniversityComponent, UniversityDetailComponent],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversityModule { }
