import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dashboard() {
    this.router.navigate(["dashboard"])
  }
  users() {
    this.router.navigate(["users"])
  }
  products() {
    this.router.navigate(["products"])
  }
}
