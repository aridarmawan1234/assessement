import { Component } from '@angular/core';
import { RestApiService }  from '../../../services/rest-api.service';
import { employee }  from '../../../model/item';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  listOfData: employee[] = [];
  isLoading: boolean = false;

  constructor(
    private service: RestApiService
  ) {

  }

  ngOnInit(): void {
    this.requestData()
  }

  requestData() {
    this.isLoading = true;

    this.service.getData().subscribe((response: Array<employee>) => {
      this.listOfData = response;
      for (let i = 0; i < this.listOfData.length; i++) {
        this.listOfData[i].no = i + 1;
      }
      this.isLoading = false;
    });
  }

}
