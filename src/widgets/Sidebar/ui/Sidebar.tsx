import {routePath} from "app/providers/AppRouter";
import * as styles from './Sidebar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <AppLink to={routePath.main} className={styles.link}>Main</AppLink>
                <AppLink to={routePath.users} className={styles.link}>Users</AppLink>
            </div>
        </div>
    )
}

export default Sidebar;