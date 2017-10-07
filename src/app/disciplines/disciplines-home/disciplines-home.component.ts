import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Discipline } from '../../_models/discipline';
import { DisciplineService } from '../../_services/discipline.service';

@Component({
    selector: 'app-disciplines-home',
    templateUrl: './disciplines-home.component.html',
    styleUrls: ['./disciplines-home.component.css']
})

export class DisciplinesHomeComponent implements OnInit {
    page = 1;
    disciplines: Discipline[];
    selectedDiscipline: Discipline;
    rowSelected: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private disciplineService: DisciplineService
    ) {}

    getDisciplines(): void {
        this.disciplineService.getDisciplines().then(disciplines => this.disciplines = disciplines);
    }

    ngOnInit(): void {
        this.getDisciplines();
        this.rowSelected = false;
    }

    onSelect(discipline: Discipline): void {
        if (discipline != null) {
            this.selectedDiscipline = discipline;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedDiscipline = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(discipline: Discipline): boolean {
        if (this.rowSelected && discipline === this.selectedDiscipline) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['disciplines/detail', this.selectedDiscipline.id]);
    }

    gotoForm(): void {
        this.router.navigate(['disciplines/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.disciplineService.create(name)
          .then(discipline => {
            this.disciplines.push(discipline);
          });
    }

    addComplete(name: string, course: string, teoricLoad: number, labLoad: number, exerciseLoad: number): void {
        name = name.trim();
        course = course.trim();

        this.disciplineService.createComplete(name, course, teoricLoad, labLoad, exerciseLoad)
            .then(discipline => {
                this.disciplines.push(discipline);
            });
    }

    delete(discipline: Discipline): void {
        this.disciplineService.delete(discipline.id)
        .then(() => {
          this.disciplines = this.disciplines.filter(t => t !== discipline);
        });
    }

}

