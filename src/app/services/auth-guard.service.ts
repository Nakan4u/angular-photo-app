import { AuthService } from './auth.service';
import { Auth2Service } from './auth2.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth2Service: Auth2Service) {

    }

    canActivate() {
        if (this.auth2Service.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}