import {LogoutButton} from "features/Logout";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";
import SidebarItem from "../SidebarItem/SidebarItem";
import * as styles from './Sidebar.module.scss'

const Sidebar = () => {
    const sidebarItems = useSelector(getSidebarItems)

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                {
                    sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            item={item}
                        />
                    ))
                }
            </div>
            <LogoutButton/>
        </div>
    )
}

export default Sidebar;