import { AppRoutingModule } from './../app.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisciplinesComponent } from './disciplines.component';
import { DisciplinesDetailComponent } from './disciplines-detail/disciplines-detail.component';
import { DisciplinesFormComponent } from './disciplines-form/disciplines-form.component';
import { DisciplinesSearchComponent } from './disciplines-search/disciplines-search.component';
import { DisciplinesHomeComponent } from "./disciplines-home/disciplines-home.component";

@NgModule({
    declarations: [
        DisciplinesComponent,
        DisciplinesHomeComponent,
        DisciplinesDetailComponent,
        DisciplinesFormComponent,
        DisciplinesSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class DisciplinesModule { }
