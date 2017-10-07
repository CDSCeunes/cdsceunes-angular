import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';

@Component({
    selector: 'app-departments',
    templateUrl: './departments-home.component.html',
    styleUrls: ['./departments-home.component.css']
})

export class DepartmentsHomeComponent implements OnInit {
    page = 1;
    rowSelected: boolean;
    departments: Department[];
    selectedDepartment: Department;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private departmentService: DepartmentService
    ) { }

    getDepartments(): void {
        this.departmentService.getDepartments().then(departments => this.departments = departments);
    }

    ngOnInit(): void {
        this.getDepartments();
        this.rowSelected = false;
    }

    onSelect(department: Department): void {
        if (department != null) {
            this.selectedDepartment = department;
            this.rowSelected = true;
        } else {
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.selectedDepartment = null;
        this.rowSelected = false;
    }

    isRowSelected() {
        if (this.rowSelected) {
            return true;
        } else {
            return false;
        }
    }

    willButtonBeShown(department: Department): boolean {
        if (this.rowSelected && department === this.selectedDepartment) {
            return false;
        } else {
            return true;
        }
    }

    gotoDetail(): void {
        this.router.navigate(['departments/detail', this.selectedDepartment.id]);
    }

    gotoForm(): void {
        this.router.navigate(['departments/new']);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.departmentService.create(name)
            .then(department => {
                this.departments.push(department);
            });
    }

    addComplete(name: string, center: string): void {
        name = name.trim();
        center = center.trim();

        this.departmentService.createComplete(name, center)
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

