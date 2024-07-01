import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroModule } from '../../nz-zorro.module';

@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule
  ]
})
export class AddEmployeeModule { }
