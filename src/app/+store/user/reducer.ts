import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from './action';
import { IUserState } from "../models/userState";

const initialState: IUserState = {
    users: [],
    isLoading: false,
    selectedUser: null
}

const userReducer = createReducer<IUserState>(
    initialState,
    on(userActions.getUsersSuccess, (state, users) => {
        return { ...state, ...users }
    }),
    on(userActions.getUserByIdSuccess, (state, selectedUser) => {
        return { ...state, selectedUser: selectedUser.user }
    }),
    on(userActions.clearSelectedUser, (state) => {
        return { ...state, selectedUser: null }
    })
)

export const featureKey = 'user';

export function reducer(state: IUserState, action: Action): IUserState {
    return userReducer(state, action);
}