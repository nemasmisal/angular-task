import { IUser } from "src/app/core/models/user";

export interface IUserState {
    users: IUser[];
    isLoading: boolean
    selectedUser: IUser | null
}