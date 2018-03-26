import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TeacherService } from '../../_services/teacher.service';
import { Teacher } from '../../_models/teacher';

import { Department } from '../../_models/department';
import { DepartmentSearchService } from '../../_services/department-search.service';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css'],
  providers: [DepartmentSearchService]
})

export class TeachersFormComponent {
  teacher = new Teacher();
  departments: Observable<Department[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location,
    private departmentSearchService: DepartmentSearchService,
    private router: Router
  ) { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    //const department = new Department();
    //department.name = this.teacher.department;
    this.teacherService.createComplete(
      
      this.teacher.name, null, this.teacher.email, this.teacher.center)
      .then(() => this.goBack());
  }

  newTeacher() {
    this.teacher = new Teacher();
  }

  goBack(): void {
    this.location.back();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  selectDepartment(content: string): void {
    this.teacher.department.name = content;
    this.searchTerms.next('');
  }

  ngOnInit(): void {
    this.departments = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.departmentSearchService.search(term)
        // or the observable of empty departmentes if there was no search term
        : Observable.of<Department[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Department[]>([]);
      });
  }

}
