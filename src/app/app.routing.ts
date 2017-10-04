import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

import { TeachersComponent } from './teachers/teachers.component';
import { TeachersStartComponent } from './teachers/teachers-start/teachers-start.component';
import { TeachersDetailComponent } from './teachers/teachers-detail/teachers-detail.component';
import { TeachersFormComponent } from './teachers/teachers-form/teachers-form.component';

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsHomeComponent } from './departments/departments-home/departments-home.component';
import { DepartmentsDetailComponent } from './departments/departments-detail/departments-detail.component';
import { DepartmentsFormComponent } from './departments/departments-form/departments-form.component';

import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplinesHomeComponent } from './disciplines/disciplines-home/disciplines-home.component';
import { DisciplinesDetailComponent } from './disciplines/disciplines-detail/disciplines-detail.component';
import { DisciplinesFormComponent } from './disciplines/disciplines-form/disciplines-form.component';

import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionsHomeComponent } from './commissions/commissions-home/commissions-home.component';
import { CommissionsDetailComponent } from './commissions/commissions-detail/commissions-detail.component';
import { CommissionsFormComponent } from './commissions/commissions-form/commissions-form.component';

import { PositionsComponent } from './positions/positions.component';
import { PositionsHomeComponent } from './positions/positions-home/positions-home.component';
import { PositionsDetailComponent } from './positions/positions-detail/positions-detail.component';
import { PositionsFormComponent } from './positions/positions-form/positions-form.component';

import { SemestersComponent } from './semesters/semesters.component';
import { SemestersHomeComponent } from './semesters/semesters-home/semesters-home.component';
import { SemestersDetailComponent } from './semesters/semesters-detail/semesters-detail.component';
import { SemestersFormComponent } from './semesters/semesters-form/semesters-form.component';

import { UsersComponent } from './users/users.component';
import { UsersConfigComponent } from './users/users-config/users-config.component';

// Import Containers
import {
    FullLayout,
    SimpleLayout
} from './containers';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // Dashboard shenanigans
    {
        path: '',
        component: FullLayout,
        data: {
            title: 'Home'
        },
        children: [
            { path: 'login', component: LoginComponent },
            {
                path: 'teachers', component: TeachersComponent, children: [
                    { path: '', component: TeachersStartComponent },
                    { path: 'detail/:id', component: TeachersDetailComponent },
                    { path: 'new', component: TeachersFormComponent }
                ]
            },
            {
                path: 'departments', component: DepartmentsComponent, children: [
                    { path: '', component: DepartmentsHomeComponent },
                    { path: 'detail/:id', component: DepartmentsDetailComponent },
                    { path: 'new', component: DepartmentsFormComponent },
                ]
            },
            {
                path: 'disciplines', component: DisciplinesComponent, children: [
                    { path: '', component: DisciplinesHomeComponent },
                    { path: 'detail/:id', component: DisciplinesDetailComponent },
                    { path: 'new', component: DisciplinesFormComponent },
                ]
            },
            {
                path: 'commissions', component: CommissionsComponent, children: [
                    { path: '', component: CommissionsHomeComponent },
                    { path: 'detail/:id', component: CommissionsDetailComponent },
                    { path: 'new', component: CommissionsFormComponent },
                ]
            },
            {
                path: 'positions', component: PositionsComponent, children: [
                    { path: '', component: PositionsHomeComponent },
                    { path: 'detail/:id', component: PositionsDetailComponent },
                    { path: 'new', component: PositionsFormComponent },
                ]
            },
            {
                path: 'semesters', component: SemestersComponent, children: [
                    { path: '', component: SemestersHomeComponent },
                    { path: 'detail/:id', component: SemestersDetailComponent },
                    { path: 'new', component: SemestersFormComponent },
                ]
            },
            {
                path: 'user', component: UsersComponent, children: [
                    {path: 'config', component: UsersConfigComponent}
                ]
            },

            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'components',
                loadChildren: './views/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: './views/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: './views/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayout,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './views/pages/pages.module#PagesModule',
            }
        ]
    },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
