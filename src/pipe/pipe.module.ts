import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { safeHtml } from './global-pipe/global-pipe.pipe';

@NgModule({
  declarations: [
    safeHtml
  ],
  imports: [
    CommonModule
  ],
  exports: [
    safeHtml
  ]
})

export class PipeglobalModule { }
