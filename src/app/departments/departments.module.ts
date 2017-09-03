import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsHomeComponent } from './departments-home/departments-home.component';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import { DepartmentsSearchComponent } from './departments-search/departments-search.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsHomeComponent,
    DepartmentsDetailComponent,
    DepartmentsFormComponent,
    DepartmentsSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    DepartmentsComponent
  ]
})
export class DepartmentsModule { }
