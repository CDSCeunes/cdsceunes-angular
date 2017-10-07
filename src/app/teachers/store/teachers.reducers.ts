import { Teacher } from '../../_models/teacher';
import * as TeachersActions from './teachers.actions';

export interface State {
  teachers: Teacher[];
  selectedTeacher: Teacher;
}

export const initialState: State = {
  teachers: [],
  selectedTeacher: null
};

export function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case TeachersActions.SET_TEACHERS:
      return {
        ...state,
        teachers: action.payload
      };
    case TeachersActions.SELECT_TEACHER:
      return {
        ...state,
        selectedTeacher: action.payload
      };
    case TeachersActions.SET_TEACHER:
      const index = state.teachers.findIndex((teacher) => {
        return teacher.id === action.payload;
      });
      const selected = index !== -1 ? state.teachers[index] : null;
      return {
        ...state,
        selectedTeacher: selected
      };
    case TeachersActions.APPEND_NEW_TEACHER:
      const teachers = [...state.teachers, action.payload];
      return {
        ...state,
        teachers
      };
    default:
      return state;
  }

}
