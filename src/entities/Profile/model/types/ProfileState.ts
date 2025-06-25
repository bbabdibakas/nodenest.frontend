import {User} from "entities/User";

export interface Profile {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export interface ProfileState {
    profileData?: Profile
    isInitialized: boolean
}