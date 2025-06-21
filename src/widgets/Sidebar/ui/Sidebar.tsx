import {routePath} from "app/providers/AppRouter";
import * as styles from './Sidebar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {profileActions} from "entities/Profile";

const Sidebar = () => {
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(profileActions.removeProfileData());
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