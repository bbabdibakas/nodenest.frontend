import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Host} from "../types/HostsPageState";

export const getHosts = createAsyncThunk<
    Host[],
    undefined,
    ThunkConfig<string[]>
>(
    'hosts/getHosts',
    async (_, {rejectWithValue, extra}) => {

        try {
            const response = await extra.api.get<Host[]>('/hosts')

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);