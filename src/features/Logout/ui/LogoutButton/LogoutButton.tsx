import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useNavigate} from "react-router";
import {routePath} from "app/providers/AppRouter";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {logout} from "../../model/services/logout";
import * as styles from "./LogoutButton.module.scss";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogout = async () => {
        const result = await dispatch(logout())
        if (result.meta.requestStatus === "fulfilled") {
            navigate(routePath.auth)
        }
    }

    return (
        <AppButton onClick={onLogout} className={styles.LogoutButton}>
            Logout
        </AppButton>
    )
}