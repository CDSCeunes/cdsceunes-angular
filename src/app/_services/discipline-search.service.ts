import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Discipline } from './../_models/discipline';

@Injectable()
export class DisciplineSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Discipline[]> {
    return this.http
               .get(`api/disciplines/?name=${term}`)
               .map(response => response.json().data as Discipline[]);
  }
}
