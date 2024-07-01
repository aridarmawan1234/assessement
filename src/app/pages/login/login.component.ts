import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RestApiService }  from '../../../services/rest-api.service';
import { employee }  from '../../../model/item';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin = this.login.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  listOfData: employee[] = [];

  constructor(
    private login: FormBuilder,
    private route: Router,
    private service: RestApiService,
    private notification: NzNotificationService
  ) {}

  onSubmit(): void | boolean {
    const isUsername = this.listOfData.filter((item) => item.username == this.formLogin.value.username)
    const isPassword = this.listOfData.filter((item) => item.password.toString() == this.formLogin.value.password)

    if(isUsername.length == 0) {
      this.notification
      .blank(
        'Invalid UserName',
        'Please Check UserName'
      )
      return false
    }

    if(isPassword.length == 0) {
      this.notification
      .blank(
        'Invalid Password',
        'Please Check Password'
      )
      return false
    }

    this.route.navigate(['page/employee'])
  }

  ngOnInit(): void {
    this.requestData()
  }

  requestData() {
    this.service.getData().subscribe((response: Array<employee>) => {
      this.listOfData = response;
    });
  }


}
