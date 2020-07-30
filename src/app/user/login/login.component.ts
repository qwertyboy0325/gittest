import { Component, OnInit ,Output} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import {Auth} from "./auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public form :FormGroup;

  constructor(
    private loginService:LoginService,
    private fb:FormBuilder
    ) {

    }
  user =new Auth('','',false);
  json:string
  token:string
  
  // account: new FormControl(['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')]),
  // password: new FormControl(['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')]),
  // rememberMe: new FormControl([true]),
  
  ngOnInit(): void {
    this.form = this.fb.group({
      account: new FormControl('', Validators.pattern('^[a-zA-Z0-9-_]{4,20}')),
      password: new FormControl('', Validators.pattern('^[a-zA-Z0-9-_]{4,20}')),
      rememberMe: new FormControl([true]),
   })
  }
  get account(){ return this.form.get('account');}
  get password(){ return this.form.get("password");}
  get rememberMe(){return this.form.get('rememverMe');}
  submitted = false;
  
  login() {
    this.submitted = true;
    this.json = JSON.stringify(this.user);
    this.getAuth()
  }
  getAuth(){
    this.loginService.postLogin(this.user).subscribe(res=> {
      console.log(res);
      this.token = res.token;
    }, error => {
      console.log(error.error)
    })
  }

}
