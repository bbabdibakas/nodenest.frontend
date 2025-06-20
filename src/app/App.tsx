import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {getUserData, getUserIsInited, userActions} from "entities/User";
import {AppRouter} from "app/providers/AppRouter";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    const isUserInitialized = useSelector(getUserIsInited)
    const userData = useSelector(getUserData)

    return (
        <div className="wrapper">
            <div className="container">
                {userData && <Sidebar/>}
                {isUserInitialized && <AppRouter/>}
            </div>
        </div>
    )
}

export default App;