import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { UserRoutingModule } from './user-routing.module';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import {ShareModule}from '../share/share.module'
import { UserService } from './service/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
    HttpClientModule,
  ],
  providers: [UserService]
})
export class UserModule { }
