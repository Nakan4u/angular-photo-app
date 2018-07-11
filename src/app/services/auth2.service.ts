import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Auth2Service {
  private BASE_URL: string = 'http://127.0.0.1:5000';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private userDetails = JSON.parse(sessionStorage.getItem('userData')) || null;
  
  public user = new BehaviorSubject<any>(this.userDetails);

  constructor(private http: Http) {}

  isLoggedIn() {
    if (!this.userDetails) {
      return false;
    } else {
      return true;
    }
  }

  login(email, password): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    let sendData = {
      'username': email,
      password
    }
    return this.http.post(url, sendData, {headers: this.headers, withCredentials: true}).toPromise()
      .then((res) => {
        let userData = res.json();

        this.userDetails = userData;
        this.user.next(userData);
        sessionStorage.setItem('userData', res.text());
        return true;
      })
      .catch((err) => {
        this.userDetails = false;
        this.user.next(false);
        sessionStorage.clear();
        throw new Error('failed to login')
      });
  }

  logout(): Promise<any> {
    let url: string = `${this.BASE_URL}/logout`;

    return this.http.get(url, {headers: this.headers}).toPromise()
      .then((res) => {
        this.userDetails = false;
        this.user.next(false);
        sessionStorage.clear();
        return true;
      })
      .catch((err) => {
        this.userDetails = false;
        this.user.next(false);
        sessionStorage.clear();
        throw new Error('failed to logout')
      });
  }

  register(email, password, confirmation): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    let sendData = {
      'username': email,
      password,
      confirmation
    }
    
    return this.http.post(url, sendData, {headers: this.headers}).toPromise();
  }
}
