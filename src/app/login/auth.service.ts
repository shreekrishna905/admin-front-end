import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

  constructor(private _http: Http) { }

  obtainAccessToken(username: string, password: string, onSuccess: (data) => void, onError: (data) => void = null): any {
    const params: string = [
      `username=${username}`,
      `password=${password}`,
      `grant_type=password`
    ].join('&');
    const headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa('trustaml-api-client:tru$t@ml') });
    this._http.post('http://localhost/admin-v2/oauth/token', params, new RequestOptions({ headers: headers }))
      .map(res => res.json())
      .subscribe(
      data => {
        this.saveToken(data);
        onSuccess(true);
      },
      err => {
        console.log('Bad credentials');
        onError(false);
      });
  }

  saveToken(token): void {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
  }

  logout(): any {
    return Cookie.delete('access_token');
  }

  getUser(): any {
    return Cookie.get('access_token');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export let AUTH_PROVIDERS: Array<any> = [{ provide: AuthService, useClass: AuthService }];