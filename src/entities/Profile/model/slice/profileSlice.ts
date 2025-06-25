import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileState} from "../types/ProfileState";
import {PROFILE_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const initialState: ProfileState = {
    isInitialized: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.profileData = action.payload;
            localStorage.setItem(PROFILE_LOCALSTORAGE_KEY, JSON.stringify(state.profileData));
        },
        initProfileData: (state) => {
            const profileData = localStorage.getItem(PROFILE_LOCALSTORAGE_KEY)
            if (profileData) {
                //@ts-expect-error fix later
                state.profileData = profileData;
            }
            state.isInitialized = true;
        },
        removeProfileData: (state) => {
            state.profileData = undefined
            localStorage.removeItem(PROFILE_LOCALSTORAGE_KEY)
        }
    },
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
