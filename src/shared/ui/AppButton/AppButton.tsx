import {ButtonHTMLAttributes} from "react";
import * as styles from './AppButton.module.scss';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const AppButton = (props: AppButtonProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type='button'
            className={`${styles.AppButton} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}