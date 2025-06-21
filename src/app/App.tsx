import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {AppRouter} from "app/providers/AppRouter";
import {Sidebar} from "widgets/Sidebar";
import {getProfileData, getProfileIsInited, profileActions} from "entities/Profile";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(profileActions.initProfileData())
    }, [dispatch])

    const isProfileInitialized = useSelector(getProfileIsInited)
    const profileData = useSelector(getProfileData)

    return (
        <div className="wrapper">
            <div className="container">
                {profileData && <Sidebar/>}
                {isProfileInitialized && <AppRouter/>}
            </div>
        </div>
    )
}

export default App;