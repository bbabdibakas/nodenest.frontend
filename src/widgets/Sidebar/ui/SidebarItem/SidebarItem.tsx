import {SidebarItemType} from "../../model/types/SidebarItemType";
import {AppLink} from "shared/ui/AppLink/AppLink";
import * as styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
}

const SidebarItem = ({item}: SidebarItemProps) => {
    return (
        <AppLink to={item.path} className={styles.SidebarItem}>
            {item.title}
        </AppLink>
    )
}

export default SidebarItem;