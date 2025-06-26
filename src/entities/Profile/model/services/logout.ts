import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';

export const logout = createAsyncThunk<
    boolean,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/logout',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, extra} = thunkApi;

        try {
            await extra.api.post('/auth/logout')

            return true
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);