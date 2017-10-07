import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { SignInComponent } from './signin/signin.component';
import { AppRoutingModule } from './../app.routing';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {

}
