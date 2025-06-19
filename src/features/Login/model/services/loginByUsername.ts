import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginActions} from '../slice/loginSlice';
import {validateLoginForm} from './validateLoginForm';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginForm} from '../selectors/getLoginForm';
import {User, userActions} from "entities/User";
import axios from "axios";

export const loginByUsername = createAsyncThunk<
    User,
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
            const response = await axios.post<User>('http://localhost:8080/api/v1/login', form)

            dispatch(userActions.setUserData(response.data))

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);