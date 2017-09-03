
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

import { Position } from '../../_models/position';
import { PositionSearchService } from '../../_services/position-search.service';


@Component({
  selector: 'app-position-search',
  templateUrl: './positions-search.component.html',
  styleUrls: [ './positions-search.component.css' ],
  providers: [PositionSearchService]
})

export class PositionsSearchComponent implements OnInit {
  positions: Observable<Position[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private positionSearchService: PositionSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.positions = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.positionSearchService.search(term)
        // or the observable of empty positiones if there was no search term
        : Observable.of<Position[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Position[]>([]);
      });
  }

  gotoDetail(position: Position): void {
    let link = ['positions/detail', position.id];
    this.router.navigate(link);
  }
}
