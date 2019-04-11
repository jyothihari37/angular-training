import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // users = [
  //   {
  //     firstName: 'Mohana priya',
  //     lastName: 'M',
  //     email: 'mohana@gmail.com',
  //     phone: '323415',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: ' priyanka',
  //     lastName: 'p',
  //     email: 'priya@gmail.com',
  //     phone: '6789223',
  //     designation: 'trainee',
  //     status: 'inactive'
  //   },

  //   {
  //     firstName: 'sruthi',
  //     lastName: 's',
  //     email: 'sruthi@gmail.com',
  //     phone: '1010101',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: 'subha',
  //     lastName: 'vellapandi',
  //     email: 'subha@gmail.com',
  //     phone: '345190',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: 'pradeep',
  //     lastName: 'p',
  //     email: 'pradeep@gmail.com',
  //     phone: '123456',
  //     designation: 'trainee',
  //     status: 'inactive'
  //   },
  //   {
  //     firstName: 'sukumar',
  //     lastName: 's',
  //     email: 'sukumar@gmail.com',
  //     phone: '23456',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: 'venkat',
  //     lastName: 'puttamsetti',
  //     email: 'venkat@gmail.com',
  //     phone: '3234109',
  //     designation: 'trainee',
  //     status: 'inactive'
  //   },
  //   {
  //     firstName: 'jyothi',
  //     lastName: 'saikam',
  //     email: 'jyothisaikam@gmail.com',
  //     phone: '8465957',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: 'harish',
  //     lastName: 'saikam',
  //     email: 'saikam@gmail.com',
  //     phone: '13456',
  //     designation: 'trainee',
  //     status: 'active'
  //   },
  //   {
  //     firstName: 'laxmi',
  //     lastName: 'saikam',
  //     email: 'laxmi@gmail.com',
  //     phone: '9652240',
  //     designation: 'trainee',
  //     status: 'active'


  //   },
  //   {

  //     firstName: 'maneesha',
  //     lastName: 'm',
  //     email: 'maneesha@gmail.com',
  //     phone: '8465957041',
  //     designation: 'trainee',
  //     status: 'inactive'
  //   },
  //   {
  //     firstName: 'cinni',
  //     lastName: 'thomos',
  //     email: 'cinni@gmail.com',
  //     phone: '8465957',
  //     designation: 'trainee',
  //     status: 'active'
  //   }
  // ]
  tableHeaders = ["Sno", "id", "username", "Email", "Phone", "designation", "firstname", "lastname", "status", "ceatedby"]

  constructor(private router: Router, private userService: UserService) { }
  users = [];

  async ngOnInit() {
    const usersList = await this.userService.getUsers();
    this.users = usersList["users"];
  }
  navigateToUser(id) {
    console.log(id)
    this.router.navigate([`users/${id}`])
  }
  getActiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "active") {
        count++;
      }
    }
    return count;
  }
  getInActiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "inactive") {
        count++;
      }
    }
    return count;
  }

}
