import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  // private isLoggedIn: boolean = false;

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  getLoggedInStatus = this.isLoggedIn.asObservable();

  constructor() { }

  // public getLoggedInStatus(): boolean {
  //   return this.isLoggedIn;
  // }
  public logIn() {
    // this.isLoggedIn = true;
    this.isLoggedIn.next(true)
  }
  public logOut() {
    // this.isLoggedIn = false;
    this.isLoggedIn.next(false)
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (1) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}