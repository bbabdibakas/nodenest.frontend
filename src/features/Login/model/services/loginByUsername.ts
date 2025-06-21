import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginActions} from '../slice/loginSlice';
import {validateLoginForm} from './validateLoginForm';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginForm} from '../selectors/getLoginForm';
import axios from "axios";
import {Profile, profileActions} from "entities/Profile";

export const loginByUsername = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/loginByUsername',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateLoginForm(form)

        if (errors.length) {
            dispatch(loginActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await axios.post<Profile>('http://localhost:8080/api/v1/login', form, {
                headers: {
                    'content-type': 'application/json',
                }
            })

            dispatch(profileActions.setProfileData(response.data))

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);