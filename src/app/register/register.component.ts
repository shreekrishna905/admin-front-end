import {PasswordValidation} from '../util/passwordvalidation';
import {RegisterService} from './register.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  loading = false;

  constructor(private registerService: RegisterService, private fb: FormBuilder) {
    this.registerForm = fb.group({
      'fullName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email]), this.isEmailUnique.bind(this)],
      'password': ['', Validators.required],
      'verifyPassword': ['', Validators.required]
    },
      {
        validator: PasswordValidation.matchPassword('password', 'verifyPassword') // validation for password verification
      });
  }

  ngOnInit() {
  }

  registerUser(registerForm: any): void {
    const user = this.registerForm.value;
    const json = {'fullName': user.fullName, 'email': user.email, 'password': user.password, 'enabled': true, 'roles': [{'id': 1, 'name': 'ROLE_USER'}]};
    console.log(json);
  }

  isEmailUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.registerService.isEmailRegistered(control.value)
          .subscribe((data) => {
            if (data.status === true) {
              resolve({'isEmailUnique': true});
            } else {
              resolve(null);
            }
          });
      }, 1000);
    });
    return q;
  }


}
