import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuardService {
constructor(private authService: AuthService) { }

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }

}
