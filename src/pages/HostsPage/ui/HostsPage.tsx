import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getHostsPageData} from "../model/selectors/getHostsPageData";
import {getHostsPageIsLoading} from "../model/selectors/getHostsPageIsLoading";
import {getHostsPageServerErrors} from "../model/selectors/getHostsPageServerErrors";
import {getHosts} from "../model/services/getHosts";

const HostsPage = () => {
    const dispatch = useAppDispatch();
    const hosts = useSelector(getHostsPageData)
    const isLoading = useSelector(getHostsPageIsLoading)
    const serverErrors = useSelector(getHostsPageServerErrors)

    useEffect(() => {
        void dispatch(getHosts())
    }, [dispatch])

    let content

    if (isLoading) {
        content = (
            <div className="page">
                Loading...
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
                {hosts.map((host, index)=>(
                    <div key={index}>
                        {host.name}
                    </div>
                ))}
            </div>
        )
    }

    return content

}

export default HostsPage;