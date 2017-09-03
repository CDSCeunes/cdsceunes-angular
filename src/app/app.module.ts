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
import { DisciplineDetailComponent } from './disciplines/discipline-detail.component';
import { DisciplineSearchComponent } from './disciplines/discipline-search.component';
import { DisciplineFormComponent } from './disciplines/discipline-form.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionService } from './_services/commission.service';
import { CommissionsDetailComponent } from './commissions/commissions-detail/commissions-detail.component';
import { CommissionsSearchComponent } from './commissions/commissions-search/commissions-search.component';
import { CommissionsFormComponent } from './commissions/commissions-form/commissions-form.component';

import { PositionsComponent } from './positions/positions.component';
import { PositionService } from './_services/position.service';
import { PositionDetailComponent } from './positions/position-detail.component';
import { PositionSearchComponent } from './positions/position-search.component';
import { PositionFormComponent } from './positions/position-form.component';

import { SemestersComponent } from './semesters/semesters.component';
import { SemesterService } from './_services/semester.service';
import { SemesterDetailComponent } from './semesters/semester-detail.component';
import { SemesterSearchComponent } from './semesters/semester-search.component';
import { SemesterFormComponent } from './semesters/semester-form.component';

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
    DisciplineDetailComponent,
    DisciplineSearchComponent,
    DisciplineFormComponent,
    CommissionsComponent,
    CommissionsDetailComponent,
    CommissionsSearchComponent,
    CommissionsFormComponent,
    PositionsComponent,
    PositionDetailComponent,
    PositionSearchComponent,
    PositionFormComponent,
    SemestersComponent,
    SemesterDetailComponent,
    SemesterSearchComponent,
    SemesterFormComponent
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
