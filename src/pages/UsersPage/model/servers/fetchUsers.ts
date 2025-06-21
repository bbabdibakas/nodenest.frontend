import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import axios from "axios";
import {User} from "entities/User";

export const fetchUsers = createAsyncThunk<
    User[],
    undefined,
    ThunkConfig<string[]>
>(
    'users/getUsers',
    async (_, {rejectWithValue}) => {

        try {
            const response = await axios.get<User[]>('http://localhost:8080/api/v1/users', {
                headers: {
                    'content-type': 'application/json',
                }
            })

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(['some server error']);
        }
    },
);