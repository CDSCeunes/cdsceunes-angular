import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';

@Component({
    selector: 'app-department-detail',
    templateUrl: './departments-detail.component.html',
    styleUrls: ['./departments-detail.component.css']
})

export class DepartmentsDetailComponent implements OnInit {
    department: Department;

    constructor(
        private departmentService: DepartmentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.departmentService.getdepartment(+params.get('id')))
            .subscribe(department => this.department = department);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.departmentService.update(this.department)
            .then(() => this.goBack());
    }
}
