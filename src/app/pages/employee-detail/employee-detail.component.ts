import { Component } from '@angular/core';
import { RestApiService }  from '../../../services/rest-api.service';
import { employee }  from '../../../model/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {

  jsonEmployee: employee = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: undefined,
    basicSalary: '',
    status: '',
    group: '',
    description: undefined,
    password: 0,
    no: 0
  }

  firstName: string | null = '';

  constructor(
    private service: RestApiService,
    private ActivatedRoute: ActivatedRoute,
  ) {
    this.firstName = this.ActivatedRoute.snapshot.paramMap.get('firstname')
  }

  ngOnInit(): void {
    this.requestData()
  }

  requestData() {
    this.service.getData().subscribe((response: Array<employee>) => {
      const listEmployee = response.find((item: employee) => item.firstName == this.firstName);
      if (listEmployee) this.jsonEmployee = {...listEmployee}
    });
  }

}
