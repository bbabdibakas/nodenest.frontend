import {getUserData} from "./model/selectors/getUserData";
import {getUserIsInited} from "./model/selectors/getUserIsInited";
import {userActions, userReducer} from "./model/slice/userSlice";
import {UserState, User} from "./model/types/UserState";

export type {
    User,
    UserState
}

export {
    userActions,
    userReducer,
    getUserData,
    getUserIsInited
}