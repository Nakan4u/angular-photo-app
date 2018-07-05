import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Auth2Service {
  private BASE_URL: string = 'http://127.0.0.1:5000';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  user = {};

  constructor(private http: Http) {}

  isLoggedIn() {
    if (this.user == null) {
      return false;
    } else {
      return true;
    }
  }

  login(email, password): Promise<any> {
    debugger;
    let url: string = `${this.BASE_URL}/login`;
    let sendData = {
      'username': email,
      password
    }
    return this.http.post(url, sendData, {headers: this.headers}).toPromise()
      .then((res) => {
        this.user = true
        return true;
      })
      .catch((err) => {
        this.user = false;
        throw new Error('failed to login')
      });
  }
}
