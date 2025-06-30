import {routePath} from "app/providers/AppRouter";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {LogoutButton} from "features/Logout";
import * as styles from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <AppLink to={routePath.main} className={styles.link}>Main</AppLink>
                <AppLink to={routePath.users} className={styles.link}>Users</AppLink>
            </div>
            <LogoutButton/>
        </div>
    )
}

export default Sidebar;