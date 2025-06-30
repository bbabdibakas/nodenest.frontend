import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile, profileActions} from "entities/Profile";

export const refreshToken = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/refreshToken',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, extra} = thunkApi;

        try {
            const response = await extra.api.post<Profile>('/auth/refreshToken')

            dispatch(profileActions.setProfileData(response.data))

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);