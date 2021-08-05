import { IUser } from "src/app/core/models/user";
import { IUserState } from "../models/userState";

export const getUsers = (state: IUserState) => state.users;
export const getUserById = (state: IUserState, id: string ) => state.users.find((u: IUser) => u.id === Number(id))