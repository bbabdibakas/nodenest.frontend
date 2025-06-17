import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {LoginState} from "../types/LoginState"

const initialState: LoginState = {
    username: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice
