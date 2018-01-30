import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
    private router: Router) { }

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

  signInWithEmail() {
    if (this.myform.valid) {
      this.authService.signInRegular(this.email.value, this.password.value)
        .then((res) => {
          this.myform.reset();
          console.log(res, 'log-in  regular');
          this.router.navigate(['search', { term: 'nature' }]);
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
        this.router.navigate(['search', { term: 'cars' }]);
      })
      .catch(err => {
        console.log(err);
        if (err.message)
          this.error = err.message;
      });
  }

}
