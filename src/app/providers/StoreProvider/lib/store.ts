import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {RootState} from "./RootState"
import {loginReducer} from "features/Login";
import {userReducer} from "entities/User";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        login: loginReducer,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}
