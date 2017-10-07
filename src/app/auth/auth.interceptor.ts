import { HttpEvent, HttpRequest } from '@angular/common/http/public_api';
import { Store } from '@ngrx/store';
import { HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';


import * as AppReducer from '../_store/app.reducers';
import * as AuthReducer from './store/auth.reducers';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppReducer.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/v1/auth') {
      return next.handle(req);
    }

    return this.store.select('auth')
      .take(1)
      .switchMap((authState: AuthReducer.State) => {
        const copiedReq = req.clone({ headers: req.headers.append('authorization', `Bearer ${authState.token}`) });
        return next.handle(copiedReq);
      });

  }

}
