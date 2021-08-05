import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './models/userState';
import * as userSelector from './user/selectors';

export const getUserStore = createFeatureSelector<IUserState>('user');
export const user = {
    all: createSelector(getUserStore, userSelector.getUsers),
    userById: createSelector(getUserStore, userSelector.getUserById)
}
