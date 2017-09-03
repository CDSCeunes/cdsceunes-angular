import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Semester } from '../../_models/semester';
import { SemesterService } from '../../_services/semester.service';

@Component({
    selector: 'app-semesters-home',
    templateUrl: './semesters-home.component.html',
    styleUrls: ['./semesters-home.component.css']
})

export class SemestersHomeComponent implements OnInit {
    semesters: Semester[];
    selectedSemester: Semester;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private semesterService: SemesterService
    ) {}

    getSemesters(): void {
        this.semesterService.getSemesters().then(semesters => this.semesters = semesters);
    }

    ngOnInit(): void {
        this.getSemesters();
    }

    onSelect(semester: Semester): void {
        this.selectedSemester = semester;
    }

    gotoDetail(): void {
        this.router.navigate(['semesters/detail', this.selectedSemester.id]);
    }

    gotoForm(): void {
        this.router.navigate(['semesters/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.semesterService.create(name)
          .then(semester => {
            this.semesters.push(semester);
          });
    }

    delete(semester: Semester): void {
        this.semesterService.delete(semester.id)
        .then(() => {
          this.semesters = this.semesters.filter(t => t !== semester);
        });
    }

}

