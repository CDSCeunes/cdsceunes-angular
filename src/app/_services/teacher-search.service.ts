import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Teacher } from './../_models/teacher';

@Injectable()
export class TeacherSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Teacher[]> {
    return this.http
               .get(`api/teachers/?name=${term}`)
               .map(response => response.json().data as Teacher[]);
  }
}
