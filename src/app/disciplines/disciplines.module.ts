import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisciplinesComponent } from './disciplines.component';
import { DisciplinesDetailComponent } from './disciplines-detail/disciplines-detail.component';
import { DisciplinesFormComponent } from './disciplines-form/disciplines-form.component';
import { DisciplinesSearchComponent } from './disciplines-search/disciplines-search.component';

@NgModule({
    declarations: [
        DisciplinesComponent,
        DisciplinesDetailComponent,
        DisciplinesFormComponent,
        DisciplinesSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DisciplinesModule { }
