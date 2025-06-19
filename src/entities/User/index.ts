import {userActions, userReducer} from "./model/slice/userSlice";
import {UserState, User} from "./model/types/UserState";

export type {
    User,
    UserState
}

export {
    userActions,
    userReducer,
}