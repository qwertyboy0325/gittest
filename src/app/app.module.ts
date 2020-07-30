import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './user/login/login.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';

import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserModule}from './user/user.module'
import { ShareModule } from './share/share.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    FriendsComponent,
    ProfileComponent,
  ],
  imports: [
    UserModule,
    ShareModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
