import {PasswordValidation} from '../util/passwordvalidation';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      'fullName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'verifyPassword': ['', Validators.required]},
      {
        validator: PasswordValidation.matchPassword('password', 'verifyPassword') // validation for password verification
      });
  }

  ngOnInit() {
  }

}
