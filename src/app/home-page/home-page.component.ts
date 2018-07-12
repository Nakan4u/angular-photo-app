import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Auth2Service } from '../services/auth2.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private auth2Service: Auth2Service
  ) { }

  ngOnInit() {
    // this.isLoggedIn = this.auth2Service.isLoggedIn()
  }

}
