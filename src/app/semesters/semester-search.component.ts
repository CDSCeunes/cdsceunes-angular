
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

import { Semester } from './../_models/semester';
import { SemesterSearchService } from './../_services/semester-search.service';


@Component({
  selector: 'app-semester-search',
  templateUrl: './semester-search.component.html',
  styleUrls: [ './semester-search.component.css' ],
  providers: [SemesterSearchService]
})

export class SemesterSearchComponent implements OnInit {
  semesters: Observable<Semester[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private semesterSearchService: SemesterSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.semesters = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.semesterSearchService.search(term)
        // or the observable of empty semesteres if there was no search term
        : Observable.of<Semester[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Semester[]>([]);
      });
  }

  gotoDetail(semester: Semester): void {
    let link = ['semesters/detail', semester.id];
    this.router.navigate(link);
  }
}
