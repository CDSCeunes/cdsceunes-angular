import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppState } from './../../_store/app.reducers';
import * as TeachersReducer from '../store/teachers.reducers';
import * as TeachersActions from '../store/teachers.actions';
import { Teacher } from '../../_models/teacher';
import { TeacherService } from '../../_services/teacher.service';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-teachers-start',
    templateUrl: './teachers-start.component.html',
    styleUrls: ['./teachers-start.component.css'],
})

export class TeachersStartComponent implements OnInit {
    page = 1;
    teachersState: Observable<TeachersReducer.State>;
    teachers: Teacher[];
    selectedTeacher: Teacher;
    rowSelected: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private teacherService: TeacherService,
        private store: Store<AppState>
    ) { }

    getTeachers(): void {
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    }

    ngOnInit() {
        this.teachersState = this.store.select('teachers');
        this.rowSelected = false;
    }

    onSelect(teacher: Teacher): void {
        if (teacher != null) {
          this.store.dispatch(new TeachersActions.SelectTeacher(teacher));
          this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.store.dispatch(new TeachersActions.SelectTeacher(null));
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }


    willButtonBeShown(teacher: Teacher): boolean {
        if (this.rowSelected && teacher === null) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(teacherId): void {
      this.router.navigate(['teachers/detail', teacherId]);
    }

    gotoForm(): void {
        this.router.navigate(['teachers/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        const newTeacher: Teacher = new Teacher();
        newTeacher.name = name;
        this.store.dispatch(new TeachersActions.SaveNewTeacher(newTeacher))
        this.teacherService.create(name)
            .then(teacher => {
                this.teachers.push(teacher);
            });
    }

    addComplete(name: string, department: string, email: string, center: string): void {
        name = name.trim();
        department = department.trim();
        email = email.trim();
        center = center.trim();

        this.teacherService.createComplete(name, department, email, center)
            .then(teacher => {
                this.teachers.push(teacher);
            });
    }

    delete(teacher: Teacher): void {
        this.teacherService.delete(teacher.id)
            .then(() => {
                this.teachers = this.teachers.filter(t => t !== teacher);
            });
    }

}

