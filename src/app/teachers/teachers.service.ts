import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../_models/teacher';



@Injectable()
export class TeachersService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get('/api/v1/teachers');
  }
  update(teacher: Teacher) {
    return this.http.put(`/api/v1/teachers/${teacher.id}`, teacher);
  }

  create(teacher: Teacher) {
    return this.http.post('/api/v1/teachers', teacher);
  }
}
