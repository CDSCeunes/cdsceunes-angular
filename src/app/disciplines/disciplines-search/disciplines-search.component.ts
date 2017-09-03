
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

import { Discipline } from '../../_models/discipline';
import { DisciplineSearchService } from '../../_services/discipline-search.service';


@Component({
  selector: 'app-discipline-search',
  templateUrl: './disciplines-search.component.html',
  styleUrls: [ './disciplines-search.component.css' ],
  providers: [DisciplineSearchService]
})

export class DisciplinesSearchComponent implements OnInit {
  disciplines: Observable<Discipline[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private disciplineSearchService: DisciplineSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.disciplines = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.disciplineSearchService.search(term)
        // or the observable of empty disciplinees if there was no search term
        : Observable.of<Discipline[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Discipline[]>([]);
      });
  }

  gotoDetail(discipline: Discipline): void {
    const link = ['disciplines/detail', discipline.id];
    this.router.navigate(link);
  }
}
