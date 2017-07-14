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
      'fullName': ['', Validators.required, Validators.email],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'verifyPassword': ['', Validators.required],
      'check': ['', Validators.required],
    },
      {
        validator: PasswordValidation.matchPassword // validation for password verification
      });
  }

  ngOnInit() {
  }

}
