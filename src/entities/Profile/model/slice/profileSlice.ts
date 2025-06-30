import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileState} from "../types/ProfileState";
import {PROFILE_LOCALSTORAGE_ACCESS_TOKEN, PROFILE_LOCALSTORAGE_USER_KEY} from "shared/const/localstorage";

const initialState: ProfileState = {
    isInitialized: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.profileData = action.payload;
            localStorage.setItem(PROFILE_LOCALSTORAGE_USER_KEY, JSON.stringify(action.payload.user));
            localStorage.setItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN, JSON.stringify(action.payload.accessToken));
        },
        initProfileData: (state) => {
            const user = localStorage.getItem(PROFILE_LOCALSTORAGE_USER_KEY)
            const accessToken = localStorage.getItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN)

            if (user && accessToken) {
                state.profileData = {user: JSON.parse(user), accessToken: JSON.parse(accessToken)};
            }
            state.isInitialized = true;
        },
        removeProfileData: (state) => {
            state.profileData = undefined
            localStorage.removeItem(PROFILE_LOCALSTORAGE_USER_KEY)
            localStorage.removeItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN)
        }
    }
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
