import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService }  from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Photo app';
  userName: string = '';
  isUserLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.userName = user && user.displayName || 'noName';
      this.isUserLoggedIn = !!user
    })
  }

  logOut(event) {
    event.preventDefault();
    if (window.confirm("Are you sure?")) {
      this.authService.logout();
      this.router.navigate(['login']);
    }
  }

}
