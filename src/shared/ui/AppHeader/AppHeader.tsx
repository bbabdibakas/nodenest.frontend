import * as styles from './AppHeader.module.scss'
import {AppButton, AppButtonTheme} from "shared/ui/AppButton/AppButton";
import TurnLeftIcon from "shared/assets/icons/TurnLeftIcon.svg";

interface AppHeaderProps {
    className?: string
    title?: string
}

export const AppHeader = (props: AppHeaderProps) => {
    const {
        className,
        title,
    } = props

    const onBack = () => {

    }

    return (
        <div className={`${styles.AppHeader} ${className}`}>
            <AppButton theme={AppButtonTheme.CLEAR} className={styles.button} onClick={onBack}>
                <div className={styles.icon}>
                    <TurnLeftIcon />
                </div>
            </AppButton>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}