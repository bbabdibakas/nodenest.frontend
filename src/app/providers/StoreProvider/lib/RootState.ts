import {AxiosInstance} from "axios";
import {ProfileState} from "entities/Profile";
import {LoginState} from "features/Login";
import {RefreshState} from "features/Refresh";
import {LogoutState} from "features/Logout";
import {UserPageState} from "pages/UsersPage";

export interface RootState {
    profile: ProfileState
    login: LoginState
    refresh: RefreshState
    logout: LogoutState
    userPage: UserPageState
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}

