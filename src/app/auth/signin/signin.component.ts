import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as AuthActions from '../store/auth.actions';
import { AppState } from './../../_store/app.reducers';
import { AuthService } from '../auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})

export class SignInComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<AppState>) { }

    ngOnInit() {

    }

    login() {

      this.store.dispatch(new AuthActions.TrySignin({ username: this.model.username,
                                                      password: this.model.password}));
    }
}
