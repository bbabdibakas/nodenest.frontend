import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getHosts} from "../services/getHosts";
import {HostsPageState} from "../types/HostsPageState";
import {Host} from "entities/Host";

const initialState: HostsPageState = {
    hosts: [],
    isLoading: false,
}

export const hostsPageSlice = createSlice({
    name: 'hostsPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHosts.pending, (state) => {
                state.isLoading = true;
                state.serverErrors = undefined
            })
            .addCase(getHosts.rejected, (state, action) => {
                state.isLoading = false;
                state.serverErrors = action.payload
            })
            .addCase(getHosts.fulfilled, (state, action: PayloadAction<Host[]>) => {
                state.isLoading = false
                state.hosts = action.payload;
            })
    }
})

export const {actions: hostsPageActions} = hostsPageSlice
export const {reducer: hostsPageReducer} = hostsPageSlice
