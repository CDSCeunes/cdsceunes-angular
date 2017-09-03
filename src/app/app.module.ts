import { CommissionsModule } from './commissions/commissions.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';

import { TeacherService } from './_services/teacher.service';
import { DepartmentService } from './_services/department.service';
import { DisciplineService } from './_services/discipline.service';
import { CommissionService } from './_services/commission.service';
import { PositionService } from './_services/position.service';
import { SemesterService } from './_services/semester.service';

// Imports for simulating a Web API - testing purposes only
import { InMemoryDataService } from './in-memory-data.service';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { PositionsModule } from './positions/positions.module';
import { SemestersModule } from './semesters/semesters.module';
import { TeachersModule } from './teachers/teachers.module';
import { DepartmentsModule } from './departments/departments.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DisciplinesModule,
    PositionsModule,
    SemestersModule,
    TeachersModule,
    DepartmentsModule,
    CommissionsModule
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
