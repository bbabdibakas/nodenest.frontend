import {Link} from "react-router";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {getUserIsInited, userActions} from "entities/User";
import {AppRouter, routePath} from "app/providers/AppRouter";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    const isUserInitialized = useSelector(getUserIsInited)

    return (
        <div className="wrapper">
            <div className="container">
                <Link to={routePath.main}>main</Link>
                <Link to={routePath.profile}>profile</Link>
                {isUserInitialized && <AppRouter/>}
            </div>
        </div>
    )
}

export default App;