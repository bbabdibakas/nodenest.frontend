import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {profileActions} from "entities/Profile";

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

            dispatch(profileActions.removeProfileData())

            return true
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);