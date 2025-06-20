import {RouteProps} from "react-router";
import {MainPage} from "pages/MainPage";
import {UsersPage} from "pages/UsersPage";
import {AuthPage} from "pages/AuthPage";

export type AppRoutesProps = RouteProps & {
    isRequiredAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    USERS = 'users',
    AUTH = 'auth',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users/', //:username
    [AppRoutes.AUTH]: '/auth',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>,
        isRequiredAuth: true
    },
    [AppRoutes.USERS]: {
        path: routePath.users,
        element: <UsersPage/>,
        isRequiredAuth: true
    },
    [AppRoutes.AUTH]: {
        path: routePath.auth,
        element: <AuthPage/>
    },
}