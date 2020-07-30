import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import {AppConfig} from '../../share';
import {User,Response} from '../../models';

import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginStatus = new BehaviorSubject<boolean>(false);
  currentUser = new BehaviorSubject<User>(null);
  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {}

  loginServer(loginData): Observable<Response> {
    let username = loginData.username.trim();
    let password = loginData.password.trim();
    return this.http.post<Response>(this.appConfig.apiUrl+'/login'
    ,{username:username,password:password});
  }
  // login(loginData): Observable<boolean> {
    // return this.loginServer(loginData)
  // }
}
