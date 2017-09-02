import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/index';

import { TeachersComponent } from './teachers/teachers.component';
import { TeacherService } from './_services/teacher.service';
import { TeacherDetailComponent } from './teachers/teacher-detail.component';
import { TeacherSearchComponent } from './teachers/teacher-search.component';
import { TeacherFormComponent } from './teachers/teacher-form.component';

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentService } from './_services/department.service';
import { DepartmentSearchComponent } from './departments/department-search.component';
import { DepartmentDetailComponent } from './departments/department-detail.component';
import { DepartmentFormComponent } from './departments/department-form.component';

import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineService } from './_services/discipline.service';
import { DisciplineDetailComponent } from './disciplines/discipline-detail.component';
import { DisciplineSearchComponent } from './disciplines/discipline-search.component';
import { DisciplineFormComponent } from './disciplines/discipline-form.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionService } from './_services/commission.service';
import { CommissionDetailComponent } from './commissions/commission-detail.component';
import { CommissionSearchComponent } from './commissions/commission-search.component';
import { CommissionFormComponent } from './commissions/commission-form.component';

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
    TeacherDetailComponent,
    TeacherSearchComponent,
    TeacherFormComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentSearchComponent,
    DepartmentFormComponent,
    DisciplinesComponent,
    DisciplineDetailComponent,
    DisciplineSearchComponent,
    DisciplineFormComponent,
    CommissionsComponent,
    CommissionDetailComponent,
    CommissionSearchComponent,
    CommissionFormComponent,
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
