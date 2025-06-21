import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserPageData} from "../model/selectors/getUserPageData";
import {getUserPageIsLoading} from "../model/selectors/getUserPageIsLoading";
import {getUserPageServerErrors} from "../model/selectors/getUserPageServerErrors";
import {fetchUsers} from "../model/servers/fetchUsers";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getUserPageData)
    const isLoading = useSelector(getUserPageIsLoading)
    const serverErrors = useSelector(getUserPageServerErrors)

    useEffect(() => {
        void dispatch(fetchUsers())
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
                {users.map((user, index)=>(
                    <div key={index}>
                        {user.name}
                    </div>
                ))}
            </div>
        )
    }

    return content

}

export default UsersPage;