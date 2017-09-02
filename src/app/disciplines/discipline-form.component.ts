import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DisciplineService } from './../_services/discipline.service';
import { Discipline } from './../_models/discipline';


@Component({
  selector: 'app-discipline-form',
  templateUrl: './discipline-form.component.html',
  styleUrls: [ './discipline-form.component.css' ]
})

export class DisciplineFormComponent {
  discipline = new Discipline();
  submitted = false;

  constructor (
    private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  onSubmit() {
      this.submitted = true;
      this.disciplineService.createComplete(
        this.discipline.name, this.discipline.course, this.discipline.teoricLoad, this.discipline.labLoad, this.discipline.exerciseLoad)
        .then(() => this.goBack());
  }

  newDiscipline() {
    this.discipline = new Discipline();
  }

  goBack(): void {
    this.location.back();
  }
}
