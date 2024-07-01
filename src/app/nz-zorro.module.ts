import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [
    NzModalModule,
    NzTableModule,
    NzDatePickerModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzNotificationModule
  ],
  exports: [
    NzModalModule,
    NzTableModule,
    NzDatePickerModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzNotificationModule
  ]
})
export class NgZorroModule { }