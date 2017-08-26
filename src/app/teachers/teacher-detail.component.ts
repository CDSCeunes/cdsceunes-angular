import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TeacherService } from './../_services/teacher.service';
import { Teacher } from './../_models/teacher';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: [ './teacher-detail.component.css' ]
})

export class TeacherDetailComponent implements OnInit {
  teacher: Teacher;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.teacherService.getTeacher(+params.get('id')))
      .subscribe(teacher => this.teacher = teacher);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.teacherService.update(this.teacher)
    .then(() => this.goBack());
  }
}
