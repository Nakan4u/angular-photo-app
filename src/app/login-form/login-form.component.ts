import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myform: FormGroup;
  email: FormControl;
  password: FormControl;

  private admin = {
    email: 'admin@mail.com',
    password: '1234qwer'
  }

  constructor(private userService: UserService) { }

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
    if (this.myform.valid && this.email.value === this.admin.email && this.password.value === this.admin.password )  {
      console.log("Form Submitted!");
      this.userService.logIn();
      this.myform.reset();
    }
  }

}
