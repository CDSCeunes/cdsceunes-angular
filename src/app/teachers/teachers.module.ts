import { TeachersStartComponent } from './teachers-start/teachers-start.component';
import { AppRoutingModule } from '../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TeachersComponent } from './teachers.component';
import { TeachersDetailComponent } from './teachers-detail/teachers-detail.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';
import { TeachersSearchComponent } from './teachers-search/teachers-search.component';

@NgModule({
  declarations: [
    TeachersComponent,
    TeachersStartComponent,
    TeachersDetailComponent,
    TeachersFormComponent,
    TeachersSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ]
})
export class TeachersModule {

}
