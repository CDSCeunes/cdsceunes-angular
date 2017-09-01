import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Semester } from './../_models/semester';

@Injectable()
export class SemesterSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Semester[]> {
    return this.http
               .get(`api/semesters/?name=${term}`)
               .map(response => response.json().data as Semester[]);
  }
}
