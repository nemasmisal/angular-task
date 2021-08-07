import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
export class UserDetailsComponent implements OnInit {
  user$: Observable<IUser | null> | null = null;
  constructor(
    private store: Store<IUserState>,
    private route: ActivatedRoute,
    protected readonly storeActions: ActionsSubject) {
  }

  resolveBundle: IResolveBundle = {
    dispatchRequest: ([dep]: any[]) => {
      const [payload] = dep;
      return this.store.dispatch(getUserById(payload))
    },
    dispatchRequestCancel: () => this.store.dispatch(cancelUserRequest()),
    requestSuccess$: this.storeActions.pipe(
      ofType(ActionTypes.getUserByIdSuccess)
    ),
    requestFailure$: this.storeActions.pipe(
      ofType(ActionTypes.getUserByIdFailed)
    ),
    dependencies: []
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.resolveBundle.dependencies = [of([{ payload: { id } }])]
    })
    this.user$ = this.store.select(user.selectedUser)
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearSelectedUser())
  }
}
