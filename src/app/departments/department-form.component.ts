import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DepartmentService } from './../_services/department.service';
import { Department } from './../_models/department';


@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: [ './department-form.component.css' ]
})

export class DepartmentFormComponent {
  department = new Department();

  constructor (
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.departmentService.create(this.department.name).then(() => this.goBack());
  }

  newDepartment() {
    this.department = new Department();
  }

  goBack(): void {
    this.location.back();
  }
}
