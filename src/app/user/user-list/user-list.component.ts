import { Component } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user';
import { user } from '../../+store';
import { getUsers, cancelUserRequest, ActionTypes } from '../../+store/user/action';
import { IResolveBundle } from 'src/app/resolve.directive';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  users$: Observable<IUser[]>;
  resolveBundle: IResolveBundle = {
    dispatchRequest: () => this.store.dispatch(getUsers()),
    dispatchRequestCancel: () => this.store.dispatch(cancelUserRequest()),
    requestSuccess$: this.storeActions.pipe(
      ofType(ActionTypes.getUsersSuccess)
    ),
    requestFailure$: this.storeActions.pipe(
      ofType(ActionTypes.getUsersFailed)
    ),
  }

  constructor(private store: Store,
    protected readonly storeActions: ActionsSubject) {
    this.users$ = store.select(user.all)
  }
}
