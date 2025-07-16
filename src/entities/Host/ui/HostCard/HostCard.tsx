import * as style from './HostCard.module.scss'
import {Host} from "../../model/types/Host";

interface HostCardProps {
    host: Host
}

export const HostCard = (props: HostCardProps) => {
    const {
        host
    } = props

    const getExpireDate = (): number => {
        const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        const created = new Date(new Date(host.createdAt).getFullYear(), new Date(host.createdAt).getMonth(), new Date(host.createdAt).getDate());

        const diffTime = today.getTime() - created.getTime();

        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    const getConfigType = (): string => {
        if (host.isConfigFileExists && host.wabaHealthStatusCode !== null) {
            return 'dialog360'
        }
        return 'telegram'
    }

    return (
        <div
            className={`${style.HostCard} ${host.wabaHealthStatusCode && host.wabaHealthStatusCode > 400 ? style.error : 'undefined'}`}>
            <div className={style.checkbox}/>
            <div className={style.name}>
                {host.name}
            </div>
            <div className={style.ip}>
                {host.ip}
            </div>
            <div className={style.config}>
                {getConfigType()}
            </div>
            <div className={style.updatedAt}>
                {getExpireDate()}
            </div>
         </div>
    )
}