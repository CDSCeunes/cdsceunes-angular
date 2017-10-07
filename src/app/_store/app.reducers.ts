import { ActionReducerMap } from '@ngrx/store';
import * as AuthReducer from '../auth/store/auth.reducers';
import * as TeachersReducer from '../teachers/store/teachers.reducers';

export interface AppState {
  auth: AuthReducer.State;
  teachers: TeachersReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer.authReducer,
  teachers: TeachersReducer.teachersReducer
};
