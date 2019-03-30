import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [];
  //   {
  //     firstName: 'Mohana priya',
  //     lastName: 'M',
  //     email: 'mohana@gmail.com',
  //     phone: '323415',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: ' priyanka',
  //     lastName: 'p',
  //     email: 'priya@gmail.com',
  //     phone: '6789223',
  //     designation: 'trainee'
  //   },

  //   {
  //     firstName: 'sruthi',
  //     lastName: 's',
  //     email: 'sruthi@gmail.com',
  //     phone: '1010101',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'subha',
  //     lastName: 'vellapandi',
  //     email: 'subha@gmail.com',
  //     phone: '345190',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'pradeep',
  //     lastName: 'p',
  //     email: 'pradeep@gmail.com',
  //     phone: '123456',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'sukumar',
  //     lastName: 's',
  //     email: 'sukumar@gmail.com',
  //     phone: '23456',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'venkat',
  //     lastName: 'puttamsetti',
  //     email: 'venkat@gmail.com',
  //     phone: '3234109',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'jyothi',
  //     lastName: 'saikam',
  //     email: 'jyothisaikam@gmail.com',
  //     phone: '8465957',
  //     designation: 'trainee'
  //   },
  //   {

  //     firstName: 'maneesha',
  //     lastName: 'm',
  //     email: 'maneesha@gmail.com',
  //     phone: '8465957041',
  //     designation: 'trainee'
  //   },
  //   {
  //     firstName: 'cinni',
  //     lastName: 'thomos',
  //     email: 'cinni@gmail.com',
  //     phone: '8465957',
  //     designation: 'trainee'
  //   }
  // ]

  products = [
    {
      name: 'Nokia',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '9000'
    },
    {
      name: 'samsung',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '20000'
    },
    {
      name: 'LG',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '3000'
    },
    {
      name: 'apple',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '15000'
    },
    {
      name: 'honor',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '20000'
    },
    {
      name: 'redmi',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '20000'
    },
    {
      name: 'Nokia',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '7000'
    },
    {
      name: 'Nokia',
      company: 'Microsoft',
      manufacture: 'japan',
      owner: 'india',
      price: '20000'
    }
  ]
  // tableHeaders = ["Sno", "First", "Last", "Email", "Phone", "designation"]
  tableHeaders = ["Sno", "name", "company", "manufacture", "owner", "price"]

  constructor() { }

  ngOnInit() {
  }

}
