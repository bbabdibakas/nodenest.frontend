import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {User} from "entities/User";

export const fetchUsers = createAsyncThunk<
    User[],
    undefined,
    ThunkConfig<string[]>
>(
    'users/getUsers',
    async (_, {rejectWithValue, extra}) => {

        try {
            const response = await extra.api.get<User[]>('/users')

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);