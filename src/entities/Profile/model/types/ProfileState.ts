import {User} from "entities/User";

export interface Profile {
    user: User;
    token: string;
}

export interface ProfileState {
    profileData?: Profile
    isInitialized: boolean
}