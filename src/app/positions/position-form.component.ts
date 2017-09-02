import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PositionService } from './../_services/position.service';
import { Position } from './../_models/position';


@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: [ './position-form.component.css' ]
})

export class PositionFormComponent {
  position = new Position();

  constructor (
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.positionService.create(this.position.name).then(() => this.goBack());
  }

  newposition() {
    this.position = new Position();
  }

  goBack(): void {
    this.location.back();
  }
}
