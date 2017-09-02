import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CommissionService } from './../_services/commission.service';
import { Commission } from './../_models/commission';


@Component({
  selector: 'app-commission-form',
  templateUrl: './commission-form.component.html',
  styleUrls: [ './commission-form.component.css' ]
})

export class CommissionFormComponent {
  commission = new Commission();

  constructor (
    private commissionService: CommissionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.commissionService.createComplete(
        this.commission.name, this.commission.minNumber, this.commission.maxNumber).then(() => this.goBack());
  }

  newCommission() {
    this.commission = new Commission();
  }

  goBack(): void {
    this.location.back();
  }
}
