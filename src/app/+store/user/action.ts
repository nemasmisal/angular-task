import { createAction, props } from "@ngrx/store";
import { IUser } from '../../core/models/user';

export const ActionTypes = {
    getUsers: '[Users List/API] Loading',
    getUsersSuccess: '[Users List/API] Success',
    getUsersFailed: '[Users List/API] Failed',
    getUserById: '[User API] Loading',
    getUserByIdSuccess: '[User API] Success',
    getUserByIdFailed: '[User API] Failed',
    cancelUserRequest: '[User API] Cancel Request',
    clearSelectedUser: '[User selectedUser] Clear'
}
export const getUsers = createAction(ActionTypes.getUsers);
export const getUsersSuccess = createAction(ActionTypes.getUsersSuccess, props<{ users: IUser[] }>());
export const getUsersFailed = createAction(ActionTypes.getUsersSuccess, props<{ error: any }>());
export const cancelUserRequest = createAction(ActionTypes.cancelUserRequest);

export const getUserById = createAction(ActionTypes.getUserById, props<{ payload: { id: string } }>());
export const getUserByIdSuccess = createAction(ActionTypes.getUserByIdSuccess, props<{ user: IUser }>());
export const getUserByIdFailed = createAction(ActionTypes.getUserByIdFailed, props<{ error: any }>());
export const clearSelectedUser = createAction(ActionTypes.clearSelectedUser);