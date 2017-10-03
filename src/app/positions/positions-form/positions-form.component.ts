import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PositionService } from '../../_services/position.service';
import { Position } from '../../_models/position';

import { Commission } from '../../_models/commission';
import { CommissionSearchService } from '../../_services/commission-search.service';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-position-form',
  templateUrl: './positions-form.component.html',
  styleUrls: [ './positions-form.component.css' ],
  providers: [CommissionSearchService]
})

export class PositionsFormComponent {
  position = new Position();
  commissions: Observable<Commission[]>;
  private searchTerms = new Subject<string>();

  constructor (
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location,
    private commissionSearchService: CommissionSearchService,
    private router: Router
  ) {}

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.positionService.createComplete(
        this.position.name, this.position.inCharge, this.position.commission).then(() => this.goBack());
  }

  newposition() {
    this.position = new Position();
  }

  goBack(): void {
    this.location.back();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  selectCommission(content: string): void {
    this.position.commission = content;
    this.searchTerms.next('');
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
}
