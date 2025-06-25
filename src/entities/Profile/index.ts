import {getProfileData} from "./model/selectors/getProfileData";
import {getProfileIsInited} from "./model/selectors/getProfileIsInited";
import {logout} from "./model/services/logout";
import {profileActions, profileReducer} from "./model/slice/profileSlice";
import {Profile, ProfileState} from "./model/types/ProfileState";

export type {
    Profile,
    ProfileState
}

export {
    profileActions,
    profileReducer,
    getProfileData,
    getProfileIsInited,
    logout
}