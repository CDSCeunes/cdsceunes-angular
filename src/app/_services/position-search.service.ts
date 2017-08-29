import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Position } from './../_models/position';

@Injectable()
export class PositionSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Position[]> {
    return this.http
               .get(`api/positions/?name=${term}`)
               .map(response => response.json().data as Position[]);
  }
}
