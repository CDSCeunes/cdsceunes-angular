import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PositionsComponent } from './positions.component';
import { PositionsDetailComponent } from './positions-detail/positions-detail.component';
import { PositionsFormComponent } from './positions-form/positions-form.component';
import { PositionsSearchComponent } from './positions-search/positions-search.component';

@NgModule({
  declarations: [
    PositionsComponent,
    PositionsDetailComponent,
    PositionsFormComponent,
    PositionsSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PositionsComponent
  ]
})
export class PositionsModule { }
