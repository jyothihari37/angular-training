import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  async login(username: string, password: string) {
    try {
      const logininfo = {
        username: username,
        password: password

      }
      const token = await this.http.post("http://localhost:3000/auth/login", logininfo).toPromise();
      return true;

    }
    catch (err) {
      console.log("Invalid credinails");
      return false
    }

  }
}