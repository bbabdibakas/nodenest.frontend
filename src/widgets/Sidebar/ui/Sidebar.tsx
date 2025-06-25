import {routePath} from "app/providers/AppRouter";
import * as styles from './Sidebar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useNavigate} from "react-router";
import {logout} from "entities/Profile";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogout = async () => {
        const result = await dispatch(logout())
        if (result.meta.requestStatus === "fulfilled") {
            navigate(routePath.auth)
        }
    }

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <AppLink to={routePath.main} className={styles.link}>Main</AppLink>
                <AppLink to={routePath.users} className={styles.link}>Users</AppLink>
            </div>
            <AppButton onClick={onLogout} className={styles.button}>
                Logout
            </AppButton>
        </div>
    )
}

export default Sidebar;