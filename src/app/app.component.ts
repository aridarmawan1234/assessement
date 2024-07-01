import { Component, OnInit,Injector, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hacker-news';
  route: string = '';
  isMenu: boolean = false;

  constructor(
    private router: Router, 
  ) {}

  onActivateMenu(e: Event) {
    this.route = this.router.url 
    console.log(this.route.split("/")[1])
    if (this.route.split("/")[1] == "login") {
      this.isMenu = true
    } else {
      this.isMenu = false
    }
    

  }

}
