import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  success;
  text;

  constructor(
    private router: Router, private authService: AuthService) {

  }
  ngOnInit() {

  }

  async login() {
    const isValid: Boolean = await this.authService.login(this.username, this.password)
    // if (isValid) this.router.navigate(["dashborad"]);
    // if (this.username === "admin" && this.password === "admin@123") {
    //   this.success = true;
    //   this.text = "succeessfully logged in"
    //   this.router.navigate(["dashboard"])
    // }

    // else {
    //   this.success = false;
    //   this.text = "invalid details"
    if (isValid) {
      this.text = "Login successfull";
      this.router.navigate(['dashboard'])
    }
    else {

      this.success = false;
      this.text = "Invalid Credentails"
    }
  }

}


