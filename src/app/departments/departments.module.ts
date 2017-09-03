import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepartmentsComponent } from './departments.component';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import { DepartmentsSearchComponent } from './departments-search/departments-search.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsDetailComponent,
    DepartmentsFormComponent,
    DepartmentsSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DepartmentsComponent
  ]
})
export class DepartmentsModule { }
