import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

import { TeachersComponent } from './teachers/teachers.component';
import { TeacherDetailComponent } from './teachers/teacher-detail.component';
import { TeacherFormComponent } from './teachers/teacher-form.component';

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './departments/department-detail.component';
import { DepartmentFormComponent } from './departments/department-form.component';

import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineDetailComponent } from './disciplines/discipline-detail.component';
import { DisciplineFormComponent } from './disciplines/discipline-form.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionDetailComponent } from './commissions/commission-detail.component';
import { CommissionFormComponent } from './commissions/commission-form.component';

import { PositionsComponent } from './positions/positions.component';
import { PositionDetailComponent } from './positions/position-detail.component';
import { PositionFormComponent } from './positions/position-form.component';

import { SemesterDetailComponent } from './semesters/semester-detail.component';
import { SemestersComponent } from './semesters/semesters.component';
import { SemesterFormComponent } from './semesters/semester-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },

    { path: 'teachers', component: TeachersComponent},
    { path: 'teachers/detail/:id', component: TeacherDetailComponent},
    { path: 'teachers/new', component: TeacherFormComponent},

    { path: 'departments', component: DepartmentsComponent},
    { path: 'departments/detail/:id', component : DepartmentDetailComponent},
    { path: 'departments/new', component: DepartmentFormComponent},

    { path: 'disciplines', component: DisciplinesComponent},
    { path: 'disciplines/detail/:id', component: DisciplineDetailComponent},
    { path: 'disciplines/new', component: DisciplineFormComponent},

    { path: 'commissions', component: CommissionsComponent},
    { path: 'commissions/detail/:id', component: CommissionDetailComponent},
    { path: 'commissions/new', component: CommissionFormComponent},

    { path: 'positions', component: PositionsComponent},
    { path: 'positions/detail/:id', component: PositionDetailComponent},
    { path: 'positions/new', component: PositionFormComponent},

    { path: 'semesters', component: SemestersComponent},
    { path: 'semesters/detail/:id', component: SemesterDetailComponent},
    { path: 'semesters/new', component: SemesterFormComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}
