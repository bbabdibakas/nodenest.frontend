import * as styles from "./AppPageLoader.module.scss";
import AppLoader from "shared/ui/AppLoader/AppLoader";

const AppPageLoader = () => {
    return (
        <div className={styles.AppPageLoader}>
            <AppLoader/>
        </div>
    )
}

export default AppPageLoader;