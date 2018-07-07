import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Auth2Service }  from '../services/auth2.service';

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
    private auth2Service: Auth2Service,) { }

  ngOnInit() {
    this.auth2Service.user.subscribe(user => {
      this.userName = user && user.displayName || 'noName';
      this.isUserLoggedIn = !!user
    })
  }

  logOut(event) {
    event.preventDefault();
    if (window.confirm("Are you sure?")) {
      this.auth2Service.logout();
      this.router.navigate(['login']);
    }
  }

}
