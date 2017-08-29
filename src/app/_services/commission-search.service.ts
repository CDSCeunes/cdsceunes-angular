import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Commission } from './../_models/commission';

@Injectable()
export class CommissionSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Commission[]> {
    return this.http
               .get(`api/commissions/?name=${term}`)
               .map(response => response.json().data as Commission[]);
  }
}
