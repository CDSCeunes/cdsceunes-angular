import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PositionService } from '../../_services/position.service';
import { Position } from '../../_models/position';


@Component({
  selector: 'app-position-form',
  templateUrl: './positions-form.component.html',
  styleUrls: [ './positions-form.component.css' ]
})

export class PositionsFormComponent {
  position = new Position();

  constructor (
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.positionService.createComplete(
        this.position.name, this.position.inCharge, this.position.commission).then(() => this.goBack());
  }

  newposition() {
    this.position = new Position();
  }

  goBack(): void {
    this.location.back();
  }
}
