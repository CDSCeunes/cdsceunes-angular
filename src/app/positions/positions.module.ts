import { AppRoutingModule } from '../app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PositionsComponent } from './positions.component';
import { PositionsHomeComponent } from './positions-home/positions-home.component';
import { PositionsDetailComponent } from './positions-detail/positions-detail.component';
import { PositionsFormComponent } from './positions-form/positions-form.component';
import { PositionsSearchComponent } from './positions-search/positions-search.component';

@NgModule({
  declarations: [
    PositionsComponent,
    PositionsHomeComponent,
    PositionsDetailComponent,
    PositionsFormComponent,
    PositionsSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    PositionsComponent
  ]
})
export class PositionsModule { }
