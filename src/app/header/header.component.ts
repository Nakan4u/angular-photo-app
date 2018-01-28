import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Photo app';
  isUserLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInStatus.subscribe(status => this.isUserLoggedIn = status)
  }

  logOut(event) {
    event.preventDefault();
    if (window.confirm("Are you sure?")) {
      this.userService.logOut();
      this.router.navigate(['login']);
    }
  }

}
