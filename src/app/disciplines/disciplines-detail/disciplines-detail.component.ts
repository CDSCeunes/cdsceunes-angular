import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DisciplineService } from '../../_services/discipline.service';
import { Discipline } from '../../_models/discipline';

@Component({
  selector: 'app-discipline-detail',
  templateUrl: './disciplines-detail.component.html',
  styleUrls: [ './disciplines-detail.component.css' ]
})

export class DisciplinesDetailComponent implements OnInit {
  discipline: Discipline;

  constructor(
    private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.disciplineService.getDiscipline(+params.get('id')))
      .subscribe(discipline => this.discipline = discipline);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.disciplineService.update(this.discipline)
    .then(() => this.goBack());
  }
}
