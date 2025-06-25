import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginActions} from '../slice/loginSlice';
import {validateLoginForm} from './validateLoginForm';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginForm} from '../selectors/getLoginForm';
import {Profile, profileActions} from "entities/Profile";

export const loginByUsername = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/loginByUsername',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState, extra} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateLoginForm(form)

        if (errors.length) {
            dispatch(loginActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.post<Profile>('/auth/login', form)

            dispatch(profileActions.setProfileData(response.data))

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);