import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {RootState, ThunkExtraArg} from "./RootState"
import {api} from "shared/api/api";
import {profileReducer} from "entities/Profile";
import {loginReducer} from "features/Login";
import {refreshReducer} from "features/Refresh";
import {logoutReducer} from "features/Logout";
import {userPageReducer} from "pages/UsersPage";
import {setupInterceptors} from "./setupInterceptors";
import {hostsPageReducer} from "pages/HostsPage";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        profile: profileReducer,
        login: loginReducer,
        refresh: refreshReducer,
        logout: logoutReducer,
        userPage: userPageReducer,
        hostsPage: hostsPageReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: api,
    };

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            }
        })
    })

    setupInterceptors(store);

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];