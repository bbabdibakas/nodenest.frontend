export interface User {
    token: string;
}

export interface UserState {
    userData?: User
    isInitialized: boolean
}