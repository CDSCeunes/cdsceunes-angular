import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { SemesterService } from './../_services/semester.service';
import { Semester } from './../_models/semester';

@Component({
  selector: 'app-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: [ './semester-detail.component.css' ]
})

export class SemesterDetailComponent implements OnInit {
  semester: Semester;

  constructor(
    private semesterService: SemesterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.semesterService.getSemester(+params.get('id')))
      .subscribe(semester => this.semester = semester);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.semesterService.update(this.semester)
    .then(() => this.goBack());
  }
}
