import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as AppReducer from './../../_store/app.reducers';
import * as AuthReducer from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader implements OnInit {

  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  //
  // public toggled(open: boolean): void {
  //   console.log('Dropdown is now: ', open);
  // }
  //
  // public toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }

  authState: Observable<AuthReducer.State>;

  constructor(private store: Store<AppReducer.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
}
