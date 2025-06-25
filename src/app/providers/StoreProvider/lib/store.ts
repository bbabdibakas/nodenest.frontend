import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {RootState, ThunkExtraArg} from "./RootState"
import {loginReducer} from "features/Login";
import {profileReducer} from "entities/Profile";
import {userPageReducer} from "pages/UsersPage";
import {api} from "shared/api/api";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        profile: profileReducer,
        login: loginReducer,
        userPage: userPageReducer
    }

    const extraArg: ThunkExtraArg = {
        api: api,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];