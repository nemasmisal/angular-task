import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './models/userState';
import * as userSelector from './user/selectors';
import { selectRouteParams } from '../+store/user/router.selector';

export const getUserStore = createFeatureSelector<IUserState>('user');
export const user = {
    all: createSelector(getUserStore, userSelector.getUsers),
    selectedUser: createSelector(getUserStore,selectRouteParams, userSelector.getUserById)
}

