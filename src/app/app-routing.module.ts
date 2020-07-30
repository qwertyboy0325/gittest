import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';


const routes:Routes=[
  {path:'user',
  redirectTo:'/user',
  pathMatch:'full'
  },
  {path:'profile',
  component:ProfileComponent
  },
  {path:'friends',
  component:FriendsComponent
  },
  {path:'',
  component:HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
