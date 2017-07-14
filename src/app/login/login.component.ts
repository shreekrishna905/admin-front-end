import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  message: string;
  loading = false;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.message = '';
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login(event, username: string, password: string) {
    event.preventDefault();
     this.loading = true;
    this.message = '';
    this.authService.obtainAccessToken(username, password, (data) => {
      if (data) {
        this.router.navigate(['/home']);
      }
    },
      (errData) => {
        this.loading = false;
        this.message = 'Invaild credentials';
        setTimeout(function() {
          this.message = '';
        }.bind(this), 2500);
      });

  }


  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
