import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user =new Auth('','',false);
  json:string
  constructor() { }

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.json = JSON.stringify(this.user);
  }
}
export class Auth{
  constructor(
    public email:string,
    public password:string,
    public isremember:boolean
  ){
  }
}