import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CommissionsComponent } from './commissions.component';
import { CommissionsSearchComponent } from './commissions-search/commissions-search.component';
import { CommissionsDetailComponent } from './commissions-detail/commissions-detail.component';
import { CommissionsFormComponent } from './commissions-form/commissions-form.component';

@NgModule({
  declarations: [
    CommissionsComponent,
    CommissionsDetailComponent,
    CommissionsSearchComponent,
    CommissionsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommissionsComponent
  ]
})
export class CommissionsModule { }
