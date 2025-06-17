import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {LoginState, ValidateLoginFormError} from "../types/LoginState"

const initialState: LoginState = {
    form: {
        username: '',
        password: '',
    },
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.form.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.form.password = action.payload
        },
        setValidateLoginFormError: (state, action: PayloadAction<ValidateLoginFormError[]>) => {
            state.validateErrors = action.payload
        }
    },
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice
