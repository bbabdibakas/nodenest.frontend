export enum ValidateLoginFormError {
    INCORRECT_USERNAME = 'Username must be more than 3 characters.',
    INCORRECT_PASSWORD = 'Password must be more than 8 characters.',
}

export interface LoginForm {
    username: string
    password: string
}

export interface LoginState {
    form: LoginForm
    isLoading: boolean
    validateErrors?: ValidateLoginFormError[]
    serverErrors?: string[]
}