import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, takeUntil } from 'rxjs/operators';
import { GetUsersService } from '../../core/services/get-users.service';
import { IAction } from '../models/action';
import { ActionTypes } from './action';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private userService: GetUsersService,
    ) { }

    getAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.getUsers),
        mergeMap(() =>
            this.userService.getUsers().pipe(
                takeUntil(this.actions$.pipe(
                    ofType(ActionTypes.cancelUserRequest)
                )),
                map(users => ({ type: ActionTypes.getUsersSuccess, users })),
                catchError(err => of({ type: ActionTypes.getUsersFailed, ...err }))
            ),
        )
    ))

    getUserById$ = createEffect(() => this.actions$.pipe(
        ofType<IAction>(ActionTypes.getUserById),
        mergeMap((action) =>
            this.userService.getUserById(action.payload.id).pipe(
                takeUntil(this.actions$.pipe(
                    ofType(ActionTypes.cancelUserRequest)
                )),
                map(user => ({ type: ActionTypes.getUserByIdSuccess, user })),
                catchError(err => of({ type: ActionTypes.getUserByIdFailed, ...err }))
            )
        )
    ))
}