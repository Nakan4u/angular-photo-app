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
import { Auth2Service } from '../services/auth2.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmation: FormControl;
  error: string;

  constructor(
    private auth2Service: Auth2Service,
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
    this.confirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmation: this.confirmation
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.auth2Service.register(this.email.value, this.password.value, this.confirmation.value)
        .then((res) => {
          console.info(res, 'register success!');
          return this.auth2Service.login(this.email.value, this.password.value);
        })
        .then((res) => {
          this.registerForm.reset();
          this.router.navigate(['search'], { queryParams: { term: 'nature' } });
        })
        .catch(err => {
          err = err.json();
          console.error(err);
          if (err.message)
            this.error = err.message;
        });
    }
  }

}
