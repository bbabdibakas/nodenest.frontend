import {LoginState} from "features/Login";
import {ProfileState} from "entities/Profile";
import {UserPageState} from "pages/UsersPage";
import AxiosInstance = Axios.AxiosInstance;

export interface RootState {
    profile: ProfileState
    login: LoginState

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

