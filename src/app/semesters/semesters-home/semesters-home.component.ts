import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { Semester } from '../../_models/semester';
import { SemesterService } from '../../_services/semester.service';

@Component({
    selector: 'app-semesters-home',
    templateUrl: './semesters-home.component.html',
    styleUrls: ['./semesters-home.component.css']
})

export class SemestersHomeComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    semesters: Semester[];
    selectedSemester: Semester;

    public offerModal;
    public scenarioModal;

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
        this.rowSelected = false;
    }

    onSelect(semester: Semester): void {
        if (semester != null) {
            this.selectedSemester = semester;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedSemester = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(semester: Semester): boolean {
        if (this.rowSelected && semester === this.selectedSemester) {
            return false;
        } else {
            return true;
        }
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

