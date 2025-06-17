import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {RootState} from "./RootState"
import {loginReducer} from "features/Login";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        login: loginReducer,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}