import {LoginState} from "features/Login";
import {UserState} from "entities/User";

export interface RootState {
    user: UserState
    login: LoginState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}