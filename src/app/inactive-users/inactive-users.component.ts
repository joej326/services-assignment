import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers = [];


  constructor(private usersService: UsersService){

  }

  ngOnInit(){
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  setToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
