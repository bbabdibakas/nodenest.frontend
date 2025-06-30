import {createSlice} from "@reduxjs/toolkit"
import {LogoutState} from "../types/LogoutState";
import {logout} from "../services/logout";

const initialState: LogoutState = {
    isLoading: false
}

export const logoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logout.pending, (state) => {
                state.serverErrors = undefined;
                state.isLoading = true
            })
            .addCase(logout.rejected, (state, action) => {
                state.serverErrors = action.payload;
                state.isLoading = false
            })
            .addCase(logout.fulfilled, (state) => {
                state.serverErrors = undefined;
                state.isLoading = false
            })
    }
})

export const {actions: logoutActions} = logoutSlice
export const {reducer: logoutReducer} = logoutSlice
