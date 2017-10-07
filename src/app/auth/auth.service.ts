import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as AppReducer from '../_store/app.reducers';
import * as AuthActions from './store/auth.actions';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private store: Store<AppReducer.AppState>,
              private router: Router) {}

  signin(username: string, password: string) {
    this.http.post('/api/v1/auth', {
      username,
      password
    }).subscribe(( data: { token: string }) =>  {
      this.store.dispatch(new AuthActions.SetToken(data.token));
      this.store.dispatch(new AuthActions.SignIn());
      this.router.navigate(['']);
    });
  }
}
