import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable()
export class UserService {
  private isLoggedIn: boolean = false;

  constructor() { }

  public getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }
  public logIn() {
    this.isLoggedIn = true;
  }
  public logOut() {
    this.isLoggedIn = false;
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.getLoggedInStatus()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}