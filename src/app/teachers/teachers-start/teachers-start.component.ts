import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from '../../_models/teacher';
import { TeacherService } from '../../_services/teacher.service';

@Component({
    selector: 'app-teachers-start',
    templateUrl: './teachers-start.component.html',
    styleUrls: ['./teachers-start.component.css'],
})

export class TeachersStartComponent implements OnInit {
    page: number = 1;
    teachers: Teacher[];
    selectedTeacher: Teacher;
    rowSelected: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private teacherService: TeacherService,
    ) { }

    getTeachers(): void {
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    }

    ngOnInit(): void {
        this.getTeachers();
        this.rowSelected = false;
    }

    onSelect(teacher: Teacher): void {
        if (teacher != null) {
            this.selectedTeacher = teacher;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedTeacher = null;
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
        if (this.rowSelected && teacher === this.selectedTeacher) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['teachers/detail', this.selectedTeacher.id]);
    }

    gotoForm(): void {
        this.router.navigate(['teachers/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
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

