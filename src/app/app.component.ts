import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {

  activeUsers = [];
  inactiveUsers = [];

  active: number;
  inactive: number;

  constructor(private counterService: CounterService,
              private usersService: UsersService){

  }

  ngOnInit(){
    // this.active = this.counterService.activeCounter;
    // this.inactive = this.counterService.inactiveCounter;
  }

  addActive(){
    this.activeUsers = this.usersService.activeUsers;
  }

  addInactive(){
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  activeCounter(){
    this.counterService.addOneToActive();
    this.active = this.counterService.activeCounter;
    console.log(`active: ${this.active}`);
  }

  inactiveCounter(){
    this.counterService.addOneToInactive();
    this.inactive = this.counterService.inactiveCounter;
    console.log(`inactive: ${this.inactive}`);
  }
}
