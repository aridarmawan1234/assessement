import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailRoutingModule } from './employee-detail-routing.module';
import { EmployeeDetailComponent } from './employee-detail.component';
import { NgZorroModule } from '../../nz-zorro.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EmployeeDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeeDetailRoutingModule,
    NgZorroModule
  ]
})
export class EmployeeDetailModule { }
