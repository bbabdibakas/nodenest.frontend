import {LoginState} from "features/Login";
import {ProfileState} from "entities/Profile";
import {UserPageState} from "pages/UsersPage";

export interface RootState {
    profile: ProfileState
    login: LoginState

    userPage: UserPageState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}