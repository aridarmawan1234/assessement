import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { RestApiService }  from '../../../services/rest-api.service';
import { employee }  from '../../../model/item';
import { getISOWeek } from 'date-fns';
import { DisabledDateFn } from 'ng-zorro-antd/date-picker/standard-types';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  formEmployee = this.create.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    description: ['', Validators.required],
    username: ['', Validators.required],
    basicSalary: [0, Validators.required],
    status: ['', Validators.required],
    group: ['', Validators.required],
    birthDate: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
  });

  listGroup: string[] = [];

  constructor(
    private create: FormBuilder,
    private service: RestApiService,
    private i18n: NzI18nService
  ) {
    this.i18n.setLocale(en_US);
  }

  ngOnInit(): void {
    this.requestData()
  }

  clearForm() {
    this.formEmployee.patchValue({
      firstName: '',
      lastName: '',
      description: '',
      username: '',
      basicSalary:0,
      status: '',
      group: '',
      birthDate: '',
      email: ''
    })
  }

  disabledDate: DisabledDateFn = (current: Date): boolean => {
    if (!current) {
      return false;
    }
    // Dapatkan tanggal hari ini tanpa waktu
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return current.getTime() > today.getTime();
  };

  requestData() {
    this.listGroup = [];
    this.service.getData()
    .subscribe((response: Array<employee>) => {
      this.listGroup = [...new Set(response.map(item => item.group))];
    });
  }

  submit() {
    console.log(this.formEmployee.getRawValue())
  }

}
