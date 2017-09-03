
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

// Layout imports
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { AsideToggleDirective } from './shared/aside.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
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
    CommissionsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  providers: [
    AppComponent,
    TeacherService,
    DepartmentService,
    DisciplineService,
    CommissionService,
    PositionService,
    SemesterService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
