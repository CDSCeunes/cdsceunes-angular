import { Teacher } from '../../_models/teacher';

export const TRY_FETCH_TEACHERS = 'TRY_FETCH_TEACHERS';
export const SET_TEACHERS = 'SET_TEACHERS';
export const SELECT_TEACHER = 'SELECT_TEACHER';
export const FETCH_TEACHER = 'FETCH_TEACHER';
export const SET_TEACHER = 'SET_TEACHER';
export const UPDATE_SELECTED_TEACHER = 'UPDATE_SELECTED_TEACHER';
export const SAVE_NEW_TEACHER = 'SAVE_NEW_TEACHER';
export const APPEND_NEW_TEACHER = 'APPEND_NEW_TEACHER';

export class TryFetchTeachers {
  readonly type = TRY_FETCH_TEACHERS;
}

export class SetTeachers {
  readonly type = SET_TEACHERS;

  constructor(public payload: Teacher[]) {}
}

export class SelectTeacher {
  readonly type = SELECT_TEACHER;

  constructor(public payload: Teacher) { }
}

export class FetchTeacher {
  readonly type = FETCH_TEACHER;

  constructor(public payload: number) {}
}

export class SetTeacher {
  readonly type = SET_TEACHER;

  constructor(public payload: number) { }
}

export class UpdateSelectedTeacher {
  readonly type = UPDATE_SELECTED_TEACHER;

  constructor(public payload: Teacher) {}
}

export class SaveNewTeacher {
  readonly type = SAVE_NEW_TEACHER;

  constructor(public payload: Teacher) {}
}

export class AppendNewTeacher {
  readonly type = APPEND_NEW_TEACHER;

  constructor(public payload: Teacher) {}
}
export type TeachersActions = TryFetchTeachers | SetTeachers | SetTeacher | UpdateSelectedTeacher |
                              AppendNewTeacher | SaveNewTeacher;
