import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from './../_models/teacher';
import { AppState } from './../_store/app.reducers';
import * as TeachersActions from './store/teachers.actions';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
})

export class TeachersComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
      this.store.dispatch(new TeachersActions.TryFetchTeachers());
    }
}

