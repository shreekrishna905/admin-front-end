import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {}

  isEmailRegistered(email: string): Observable<any> {
    return this.http.get('http://localhost/admin-v2/api/user/check?email=' + email)
      .map((response: Response) => response.json());
  }

}
export let REGISTER_PROVIDERS: Array<any> = [{ provide: RegisterService, useClass: RegisterService }];
