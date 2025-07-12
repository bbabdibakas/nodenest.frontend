import {userPageReducer} from "./model/slice/userPageSlice";
import {UserPageState} from "./model/types/UserPageState";
import {UsersPageAsync} from "./ui/UsersPage.async";

export type {
    UserPageState
}

export {
    UsersPageAsync as UsersPage,
    userPageReducer
}