import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private isLoggedInObs = new BehaviorSubject<boolean>(false);

  getLoggedInStatus = this.isLoggedInObs.asObservable();

  constructor() { }

  public logIn() {
    this.isLoggedInObs.next(true)
  }
  public logOut() {
    this.isLoggedInObs.next(false)
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService) { };

  canActivate() {
    console.log("OnlyLoggedInUsers");
    return this.userService.getLoggedInStatus;
  }
}