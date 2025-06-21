import {userPageReducer} from "./model/slice/userPageSlice";
import {UserPageState} from "./model/types/UserPageState";
import UsersPage from "./ui/UsersPage";

export type {
    UserPageState
}

export {
    UsersPage,
    userPageReducer
}