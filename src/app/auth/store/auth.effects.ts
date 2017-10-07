import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  @Effect()
  authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN)
      .map((action: AuthActions.TrySignin) => {
        return action.payload;
      })
      .switchMap((payload: {username: string, password: string}) => {
        return this.authService.signin(payload.username, payload.password);
      })
      .mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ];
      });

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {}

}
