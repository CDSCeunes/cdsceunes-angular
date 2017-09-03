import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/index';

import { TeachersComponent } from './teachers/teachers.component';
import { TeacherService } from './_services/teacher.service';
import { TeachersDetailComponent } from './teachers/teachers-detail/teachers-detail.component';
import { TeachersSearchComponent } from './teachers/teachers-search/teachers-search.component';
import { TeachersFormComponent } from './teachers/teachers-form/teachers-form.component';

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentService } from './_services/department.service';
import { DepartmentsSearchComponent } from './departments/departments-search/departments-search.component';
import { DepartmentsDetailComponent } from './departments/departments-detail/departments-detail.component';
import { DepartmentsFormComponent } from './departments/departments-form/departments-form.component';

import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineService } from './_services/discipline.service';
import { DisciplinesDetailComponent } from './disciplines/disciplines-detail/disciplines-detail.component';
import { DisciplinesSearchComponent } from './disciplines/disciplines-search/disciplines-search.component';
import { DisciplinesFormComponent } from './disciplines/disciplines-form/disciplines-form.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionService } from './_services/commission.service';
import { CommissionsDetailComponent } from './commissions/commissions-detail/commissions-detail.component';
import { CommissionsSearchComponent } from './commissions/commissions-search/commissions-search.component';
import { CommissionsFormComponent } from './commissions/commissions-form/commissions-form.component';

import { PositionsComponent } from './positions/positions.component';
import { PositionService } from './_services/position.service';
import { PositionsDetailComponent } from './positions/positions-detail/positions-detail.component';
import { PositionsSearchComponent } from './positions/positions-search/positions-search.component';
import { PositionsFormComponent } from './positions/positions-form/positions-form.component';

import { SemestersComponent } from './semesters/semesters.component';
import { SemesterService } from './_services/semester.service';
import { SemestersDetailComponent } from './semesters/semesters-detail/semesters-detail.component';
import { SemestersSearchComponent } from './semesters/semesters-search/semesters-search.component';
import { SemestersFormComponent } from './semesters/semesters-form/semesters-form.component';

// Imports for simulating a Web API - testing purposes only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeachersComponent,
    TeachersDetailComponent,
    TeachersSearchComponent,
    TeachersFormComponent,
    DepartmentsComponent,
    DepartmentsDetailComponent,
    DepartmentsSearchComponent,
    DepartmentsFormComponent,
    DisciplinesComponent,
    DisciplinesDetailComponent,
    DisciplinesSearchComponent,
    DisciplinesFormComponent,
    CommissionsComponent,
    CommissionsDetailComponent,
    CommissionsSearchComponent,
    CommissionsFormComponent,
    PositionsComponent,
    PositionsDetailComponent,
    PositionsSearchComponent,
    PositionsFormComponent,
    SemestersComponent,
    SemestersDetailComponent,
    SemestersSearchComponent,
    SemestersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    AppComponent,
    TeacherService,
    DepartmentService,
    DisciplineService,
    CommissionService,
    PositionService,
    SemesterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
