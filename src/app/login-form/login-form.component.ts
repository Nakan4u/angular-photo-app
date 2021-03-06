import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotifierService } from 'angular-notifier';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Auth2Service } from '../services/auth2.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  error: string;

  constructor(
    private authService: AuthService,
    private auth2Service: Auth2Service,
    private router: Router,
    private notifier: NotifierService
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  signIn() {
    if (this.myform.valid) {
      this.auth2Service.login(this.email.value, this.password.value)
        .then((res) => {
          this.myform.reset();
          this.router.navigate(['search'], { queryParams: { term: 'nature' } });
          this.notifier.notify( 'success', 'Login success!' );
        })
        .catch(err => {
          console.error(err);
          if (err.message)
            this.error = err.message;
            this.notifier.notify( 'error', err.message );
        });
    }
  }

  signInWithEmail() {
    if (this.myform.valid) {
      this.authService.signInRegular(this.email.value, this.password.value)
        .then((res) => {
          this.myform.reset();
          console.log(res, 'log-in  regular');
          this.router.navigate(['search'], { queryParams: { term: 'nature' } });
        })
        .catch(err => {
          console.log(err);
          if (err.message)
            this.error = err.message;
        });
    }
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        console.log(res, 'log-in with google');
        this.router.navigate(['search'], { queryParams: { term: 'cars' } });
      })
      .catch(err => {
        console.log(err);
        if (err.message)
          this.error = err.message;
      });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        console.log(res, 'log-in with facebook');
        this.router.navigate(['search'], { queryParams: { term: 'animals' } });
      })
    .catch((err) => console.log(err));
  }

}
