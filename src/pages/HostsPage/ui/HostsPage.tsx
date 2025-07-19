import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getHostsPageData} from "../model/selectors/getHostsPageData";
import {getHostsPageIsLoading} from "../model/selectors/getHostsPageIsLoading";
import {getHostsPageServerErrors} from "../model/selectors/getHostsPageServerErrors";
import {getHosts} from "../model/services/getHosts";
import {HostList} from "entities/Host";
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader";
import {AppHeader} from "shared/ui/AppHeader/AppHeader";
import {AppButton, AppButtonTheme} from "shared/ui/AppButton/AppButton";
import {useSearchParams} from "react-router";
import * as styles from "./HostsPage.module.scss";

const filters = ['all hosts', 'dialog360', 'telegram']

const HostsPage = () => {
    const dispatch = useAppDispatch();
    const hosts = useSelector(getHostsPageData)
    const isLoading = useSelector(getHostsPageIsLoading)
    const serverErrors = useSelector(getHostsPageServerErrors)

    const [searchParams, setSearchParams] = useSearchParams();

    const activeFilter = searchParams.get("filter") || "all hosts";

    const toggleIsActive = (newFilter: string) => {
        setSearchParams({filter: newFilter})
    }

    useEffect(() => {
        void dispatch(getHosts(activeFilter))
    }, [dispatch, activeFilter])

    let content

    if (isLoading) {
        content = (
            <div className="page">
                <AppPageLoader/>
            </div>
        )
    } else if (serverErrors) {
        content = (
            <div className="page">
                serverErrors
            </div>
        )
    } else {
        content = (
            <div className="page">
                <AppHeader title={"Hosts"}/>
                <div className={styles.buttons}>
                    {
                        filters.map((filter, index) => (
                            <AppButton
                                className={styles.button}
                                theme={AppButtonTheme.CLEAR}
                                onClick={() => toggleIsActive(filter)}
                                key={index}
                            >
                                <div className={styles.title}>
                                    <div>
                                        {filter}
                                    </div>
                                    {filter === activeFilter ? <div className={styles.active}/> : null}
                                </div>
                            </AppButton>
                        ))
                    }
                </div>
                <HostList hosts={hosts}/>
            </div>
        )
    }

    return content

}

export default HostsPage;
