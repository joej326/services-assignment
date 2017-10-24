import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers = [];
  


  constructor(private usersService: UsersService){

  }

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
  }

  setToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.activeUsers = this.usersService.activeUsers;
    console.log(this.usersService);
  }
}
