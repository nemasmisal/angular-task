import { IUserState } from "../models/userState";

export const getUsers = (state: IUserState) => state.users;
export const getUserById = (state: IUserState) => state.selectedUser;