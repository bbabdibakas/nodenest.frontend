import {User} from "entities/User";

export interface UserPageState {
    users: User[];
    isLoading: boolean;
    serverErrors?: string[];
}