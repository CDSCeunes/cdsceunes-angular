import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SemestersComponent } from './semesters.component';
import { SemestersDetailComponent } from './semesters-detail/semesters-detail.component';
import { SemestersFormComponent } from './semesters-form/semesters-form.component';
import { SemestersSearchComponent } from './semesters-search/semesters-search.component';

@NgModule({
  declarations: [
    SemestersComponent,
    SemestersDetailComponent,
    SemestersFormComponent,
    SemestersSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SemestersComponent
  ]
})
export class SemestersModule { }
