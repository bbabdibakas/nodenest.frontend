import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "entities/User";
import {UserPageState} from "../types/UserPageState";
import {fetchUsers} from "../servers/fetchUsers";

const initialState: UserPageState = {
    users: [],
    isLoading: false,
}

export const userPageSlice = createSlice({
    name: 'userPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.serverErrors = undefined
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.serverErrors = action.payload
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.isLoading = false
                state.users = action.payload;
            })
    }
})

export const {actions: userPageActions} = userPageSlice
export const {reducer: userPageReducer} = userPageSlice
