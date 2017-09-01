import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Semester } from './../_models/semester';

@Injectable()
export class SemesterService {
  // URL to the Web API
  private semestersUrl = 'api/semesters';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getSemesters(): Promise<Semester[]> {
    return this.http.get(this.semestersUrl)
               .toPromise()
               .then(response => response.json().data as Semester[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  getSemester(id: number): Promise<Semester> {
    const url = `${this.semestersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Semester)
      .catch(this.handleError);
  }

  update(semester: Semester): Promise<Semester> {
    const url = `${this.semestersUrl}/${semester.id}`;
    return this.http
      .put(url, JSON.stringify(semester), {headers: this.headers})
      .toPromise()
      .then(() => semester)
      .catch(this.handleError);
  }

  create(name: string): Promise<Semester> {
    return this.http
      .post(this.semestersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Semester)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.semestersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
