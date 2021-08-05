import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from './action';
import { IUserState } from "../models/userState";

const initialState: IUserState = {
    users: []
}

const userReducer = createReducer(
    initialState,
    on(userActions.getUsersSuccess, (state, users) => {
        return { ...state, ...users }
    })
)
export const featureKey = 'user'
export function reducer(state: IUserState, action: Action): IUserState {
    return userReducer(state, action);
}