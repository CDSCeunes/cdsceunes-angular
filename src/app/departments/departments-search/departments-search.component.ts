
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Department } from '../../_models/department';
import { DepartmentSearchService } from '../../_services/department-search.service';


@Component({
    selector: 'app-department-search',
    templateUrl: './departments-search.component.html',
    styleUrls: ['./departments-search.component.css'],
    providers: [DepartmentSearchService]
})

export class DepartmentsSearchComponent implements OnInit {
    departments: Observable<Department[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private departmentSearchService: DepartmentSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
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

    gotoDetail(department: Department): void {
        let link = ['departments/detail', department.id];
        this.router.navigate(link);
    }
}
