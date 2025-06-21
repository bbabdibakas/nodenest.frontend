import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {RootState} from "./RootState"
import {loginReducer} from "features/Login";
import {profileReducer} from "entities/Profile";
import {userPageReducer} from "pages/UsersPage";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        profile: profileReducer,
        login: loginReducer,
        userPage: userPageReducer
    }

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];