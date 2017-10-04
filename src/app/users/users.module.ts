import { AppRoutingModule } from '../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersConfigComponent } from './users-config/users-config.component';

@NgModule({
    declarations: [
      UsersComponent,
      UsersConfigComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      AppRoutingModule
    ]
  })

  export class UsersModule {

  }
