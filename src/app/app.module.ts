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

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentService } from './_services/department.service';
import { DepartmentSearchComponent } from './departments/department-search.component';
import { DepartmentDetailComponent } from './departments/department-detail.component';

import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineService } from './_services/discipline.service';
import { DisciplineDetailComponent } from './disciplines/discipline-detail.component';
import { DisciplineSearchComponent } from './disciplines/discipline-search.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionService } from './_services/commission.service';
import { CommissionDetailComponent } from './commissions/commission-detail.component';
import { CommissionSearchComponent } from './commissions/commission-search.component';

import { PositionsComponent } from './positions/positions.component';
import { PositionService } from './_services/position.service';
import { PositionDetailComponent } from './positions/position-detail.component';
import { PositionSearchComponent } from './positions/position-search.component';

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
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentSearchComponent,
    DisciplinesComponent,
    DisciplineDetailComponent,
    DisciplineSearchComponent,
    CommissionsComponent,
    CommissionDetailComponent,
    CommissionSearchComponent,
    PositionsComponent,
    PositionDetailComponent,
    PositionSearchComponent
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
    PositionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
