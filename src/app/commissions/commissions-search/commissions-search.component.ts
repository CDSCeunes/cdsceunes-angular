
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

import { Commission } from '../../_models/commission';
import { CommissionSearchService } from '../../_services/commission-search.service';


@Component({
  selector: 'app-commission-search',
  templateUrl: './commissions-search.component.html',
  styleUrls: [ './commissions-search.component.css' ],
  providers: [CommissionSearchService]
})

export class CommissionsSearchComponent implements OnInit {
  commissions: Observable<Commission[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private commissionSearchService: CommissionSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.commissions = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.commissionSearchService.search(term)
        // or the observable of empty commissiones if there was no search term
        : Observable.of<Commission[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Commission[]>([]);
      });
  }

  gotoDetail(commission: Commission): void {
    let link = ['commissions/detail', commission.id];
    this.router.navigate(link);
  }
}
