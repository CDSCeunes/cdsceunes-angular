import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeachersComponent } from './teachers.component';
import { TeachersDetailComponent } from './teachers-detail/teachers-detail.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';
import { TeachersSearchComponent } from './teachers-search/teachers-search.component';

@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailComponent,
    TeachersFormComponent,
    TeachersSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule {

}
