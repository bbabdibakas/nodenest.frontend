import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router";
import {ReactNode} from "react";
import {routePath} from "../lib/routeConfig";
import {getProfileData} from "entities/Profile";

interface RequireAuthProps {
    children: ReactNode;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const profileData = useSelector(getProfileData)
    const location = useLocation();

    if (!profileData) {
        return <Navigate to={routePath.auth} state={{from: location}} replace/>
    }

    return children
}