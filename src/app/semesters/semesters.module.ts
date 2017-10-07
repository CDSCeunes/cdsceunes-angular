import { AppRoutingModule } from '../app.routing';
import { SemestersHomeComponent } from './semesters-home/semesters-home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SemestersComponent } from './semesters.component';
import { SemestersDetailComponent } from './semesters-detail/semesters-detail.component';
import { SemestersFormComponent } from './semesters-form/semesters-form.component';
import { SemestersSearchComponent } from './semesters-search/semesters-search.component';

@NgModule({
  declarations: [
    SemestersComponent,
    SemestersHomeComponent,
    SemestersDetailComponent,
    SemestersFormComponent,
    SemestersSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    SemestersComponent
  ]
})
export class SemestersModule { }
