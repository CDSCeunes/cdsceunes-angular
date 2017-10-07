import { HttpEvent, HttpRequest } from '@angular/common/http/public_api';
import { Store } from '@ngrx/store';
import { HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';


import * as AppReducer from '../_store/app.reducers';
import * as AuthReducer from './store/auth.reducers';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppReducer.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.select('auth')
      .switchMap((authState: AuthReducer.State) => {
        const copiedReq = req.clone({ headers: req.headers.append('X-AUTH-TOKEN', authState.token) });
        return next.handle(copiedReq);
      });

  }

}
