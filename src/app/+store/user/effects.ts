import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { GetUsersService } from '../../core/services/get-users.service';
import { ActionTypes } from './action';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private userService: GetUsersService
    ) { }

    getAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.getUsers),
        mergeMap(() =>
            this.userService.getUsers().pipe(
                map(users => ({ type: ActionTypes.getUsersSuccess, users })),
                catchError(err => of({ type: ActionTypes.getUsersFailed, ...err }))
            )
        )
    ))
}