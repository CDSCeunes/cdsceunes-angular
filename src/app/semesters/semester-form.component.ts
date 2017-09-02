import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { SemesterService } from './../_services/semester.service';
import { Semester } from './../_models/semester';


@Component({
  selector: 'app-semester-form',
  templateUrl: './semester-form.component.html',
  styleUrls: [ './semester-form.component.css' ]
})

export class SemesterFormComponent {
  semester = new Semester();

  constructor (
    private semesterService: SemesterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.semesterService.create(this.semester.name).then(() => this.goBack());
  }

  newsemester() {
    this.semester = new Semester();
  }

  goBack(): void {
    this.location.back();
  }
}
