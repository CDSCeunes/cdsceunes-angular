import * as AuthActions from './auth.actions';
import { SET_TOKEN } from './auth.actions';


export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
