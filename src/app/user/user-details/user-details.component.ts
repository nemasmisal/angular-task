import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserState } from 'src/app/+store/models/userState';
import { IUser } from 'src/app/core/models/user';
import { IResolveBundle } from 'src/app/resolve.directive';
import { user } from '../../+store';
import { ActionTypes, cancelUserRequest, clearSelectedUser, getUserById } from '../../+store/user/action';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
  user$: Observable<IUser | null>  = this.store.select(user.selectedUser);
  constructor(
    private store: Store<IUserState>,
    private route: ActivatedRoute,
    protected readonly storeActions: ActionsSubject) {
  }

  resolveBundle: IResolveBundle = {
    dispatchRequest: ([id]: any) => this.store.dispatch(getUserById({payload : id })),
    dispatchRequestCancel: () => this.store.dispatch(cancelUserRequest()),
    requestSuccess$: this.storeActions.pipe(
      ofType(ActionTypes.getUserByIdSuccess)
    ),
    requestFailure$: this.storeActions.pipe(
      ofType(ActionTypes.getUserByIdFailed)
    ),
    dependencies: [this.route.params.pipe(map(params => params))]
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearSelectedUser())
  }
}
