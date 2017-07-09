import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.message = '';
  }

  login(event, username: string, password: string) {
    event.preventDefault();
    this.message = '';
    this.authService.obtainAccessToken(username, password, (data) => {
      if (data) {
        this.router.navigate(['/home']);
      }
    },
      (errData) => {
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
