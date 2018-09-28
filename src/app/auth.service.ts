import { environment } from './../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  url = environment.url;

  userRegister(user) {
    return this.http.post(this.url+'/users/register', user);
  }

  userLogin(user) {
    return this.http.post(this.url+'/users/login', user);
  }

  getAuth() {
    return !!localStorage.getItem('atostoken');
  }

}
