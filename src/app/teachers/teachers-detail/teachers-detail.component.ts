import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import * as TeachersActions from '../store/teachers.actions';
import * as TeachersReducer from '../store/teachers.reducers';
import { TeacherService } from '../../_services/teacher.service';
import { Teacher } from '../../_models/teacher';
import { AppState } from '../../_store/app.reducers';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teachers-detail.component.html',
  styleUrls: [ './teachers-detail.component.css' ]
})

export class TeachersDetailComponent implements OnInit {
  teacher: Teacher;
  teachersState: Observable<TeachersReducer.State>;

  constructor(
    private store: Store<AppState>,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.teachersState = this.store.select('teachers');
    this.route.paramMap
      .map((params: ParamMap) => {
        return params.get('id');
       }).subscribe((id: string) => {
         this.store.dispatch(new TeachersActions.SetTeacher(+id));
         this.teachersState.subscribe((state: TeachersReducer.State) => {
           this.teacher = state.selectedTeacher;
         });
       });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.store.dispatch(new TeachersActions.UpdateSelectedTeacher(this.teacher));
    this.goBack();
  }
}
