import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Host} from "entities/Host";

export const getHosts = createAsyncThunk<
    Host[],
    string,
    ThunkConfig<string[]>
>(
    'hosts/getHosts',
    async (filter, {rejectWithValue, extra}) => {

        try {
            const response = await extra.api.get<Host[]>(`/hosts?filter=${filter}`)

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);