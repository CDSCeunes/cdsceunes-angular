import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Semester } from './../_models/semester';
import { SemesterService } from './../_services/semester.service';

@Component({
    selector: 'app-semesters',
    templateUrl: './semesters.component.html',
})
export class SemestersComponent implements OnInit {

  ngOnInit() {}
}
