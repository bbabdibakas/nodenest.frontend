import {createSlice} from "@reduxjs/toolkit"
import {RefreshState} from "../types/RefreshState";
import {refreshToken} from "../services/refreshToken";

const initialState: RefreshState = {
    isLoading: false
}

export const refreshSlice = createSlice({
    name: 'refresh',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(refreshToken.pending, (state) => {
                state.serverErrors = undefined;
                state.isLoading = true
            })
            .addCase(refreshToken.rejected, (state, action) => {
                state.serverErrors = action.payload;
                state.isLoading = false
            })
            .addCase(refreshToken.fulfilled, (state) => {
                state.serverErrors = undefined;
                state.isLoading = false
            })
    }
})

export const {actions: refreshActions} = refreshSlice
export const {reducer: refreshReducer} = refreshSlice
