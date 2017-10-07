import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { TeachersService } from '../teachers.service';
import * as TeachersActions from './teachers.actions';
import { Teacher } from '../../_models/teacher';




@Injectable()
export class TeachersEffects {
  @Effect()
  teachersFetch = this.actions$
    .ofType(TeachersActions.TRY_FETCH_TEACHERS)
    .switchMap(() => {
      return this.teachersService.fetch();
    })
    .map((teachers: Teacher[]) => {
      return {
        payload: teachers ,
        type: TeachersActions.SET_TEACHERS
      };
    });

  @Effect()
  teacherUpdate = this.actions$
    .ofType(TeachersActions.UPDATE_SELECTED_TEACHER)
    .map((action: TeachersActions.UpdateSelectedTeacher) => action.payload)
    .switchMap((payload: Teacher) => {
      return this.teachersService.update(payload);
    })
    .mergeMap(() => {
      return [
        {
          type: TeachersActions.SELECT_TEACHER,
          payload: null
        },
        {
          type: TeachersActions.TRY_FETCH_TEACHERS
        }
      ];
    });

    @Effect()
    teacherCreate = this.actions$
      .ofType(TeachersActions.SAVE_NEW_TEACHER)
      .map((action: TeachersActions.SaveNewTeacher) => action.payload)
      .switchMap((payload: Teacher) => {
        return this.teachersService.create(payload);
      })
      .map((teacher: Teacher) => {
        return {
          type: TeachersActions.APPEND_NEW_TEACHER,
          payload: teacher
        };
      });


  constructor(private actions$: Actions,
              private teachersService: TeachersService) {}
}
