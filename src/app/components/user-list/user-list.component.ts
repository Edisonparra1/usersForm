// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService  } from  '../../services/service-user.service'
import { User } from  '../../models/User'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.slice(0, 5);
    });
  }
}
