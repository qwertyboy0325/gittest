import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Auth} from './auth';

import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = "/api/login";
  data : any
  postLogin(auth:Auth){
    return this.http.post<any>(this.loginUrl,auth,httpOptions)
  }
  constructor(private http:HttpClient) { }
}