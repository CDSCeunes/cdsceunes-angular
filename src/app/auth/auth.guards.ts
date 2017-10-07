import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import * as AppReducer from '../_store/app.reducers';
import * as AuthReducer from './store/auth.reducers';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppReducer.AppState>,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
      const authenticated = this.store.select('auth').map((authState: AuthReducer.State) => {
        return authState.authenticated;
      });

      authenticated.subscribe(auth => {
        if (!auth) {
          this.router.navigate(['login']);
        }
      });

      return authenticated;
  }
}
