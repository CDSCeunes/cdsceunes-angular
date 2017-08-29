import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Department } from './../_models/department';
import { DepartmentService } from './../_services/department.service';

@Component({
    selector: 'app-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
    departments: Department[];
    selectedDepartment: Department;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private departmentService: DepartmentService
    ) {}

    getDepartments(): void {
        this.departmentService.getDepartments().then(departments => this.departments = departments);
    }

    ngOnInit(): void {
        this.getDepartments();
    }

    onSelect(department: Department): void {
        this.selectedDepartment = department;
    }

    gotoDetail(): void {
        this.router.navigate(['departments/detail', this.selectedDepartment.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.departmentService.create(name)
          .then(department => {
            this.departments.push(department);
          });
    }

    delete(department: Department): void {
        this.departmentService.delete(department.id)
        .then(() => {
          this.departments = this.departments.filter(t => t !== department);
        });
    }

}

