import {Host, HostCard} from "entities/Host";
import * as styles from "./HostList.module.scss"

interface HostListProps {
    hosts: Host[];
    className?: string;
}

export const HostList = (props: HostListProps) => {
    const {
        hosts,
        className
    } = props

    return (
        <div className={`${styles.HostList} ${className}`}>
            {hosts.map((host, index)=>(
                <HostCard
                    host={host}
                    key={index}
                />
            ))}
        </div>
    )
}
