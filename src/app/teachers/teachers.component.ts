import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from './../_models/teacher';
import { TeacherService } from './../_services/teacher.service';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
})

export class TeachersComponent implements OnInit {
    teachers: Teacher[];
    selectedTeacher: Teacher;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private teacherService: TeacherService
    ) {}

    ngOnInit() { }

}

