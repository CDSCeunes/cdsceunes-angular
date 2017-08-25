import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Position } from './../_models/position';
import { PositionService } from './../_services/position.service';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: [ './position-detail.component.css' ]
})

export class PositionDetailComponent implements OnInit {
  position: Position;

  constructor(
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.positionService.getposition(+params.get('id')))
      .subscribe(position => this.position = position);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.positionService.update(this.position)
    .then(() => this.goBack());
  }
}
