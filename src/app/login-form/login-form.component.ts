import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService }  from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myform: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(
    private userService: UserService,
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

  onSubmit() {
    if (this.myform.valid )  {
      console.log("Form Submitted!");
      this.userService.logIn();
      this.myform.reset();
      this.router.navigate(['search', {term: 'nature'}]);
    }
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.userService.logIn();
        this.router.navigate(['search', {term: 'nature'}]);
      })
    .catch((err) => console.log(err));
  }

}
