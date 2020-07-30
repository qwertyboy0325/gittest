import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes } from '@angular/router';
import {AppConfig}from './app.config'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AppConfig]
})
export class ShareModule { }
