import * as styles from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router";

interface AppLinkProps extends LinkProps {
    className?: string
}

export const AppLink = (props: AppLinkProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props

    return (
        <Link
            className={`${styles.AppLink} ${className}`}
            {...otherProps}
        >
            {children}
        </Link>
    )
}