import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TeacherService } from './../_services/teacher.service';
import { Teacher } from './../_models/teacher';


@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: [ './teacher-form.component.css' ]
})

export class TeacherFormComponent {
  teacher = new Teacher();

  constructor (
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.teacherService.createComplete(
        this.teacher.name, this.teacher.department, this.teacher.email, this.teacher.center)
        .then(() => this.goBack());
  }

  newTeacher() {
    this.teacher = new Teacher();
  }

  goBack(): void {
    this.location.back();
  }
}
