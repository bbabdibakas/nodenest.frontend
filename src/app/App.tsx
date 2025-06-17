import {Link, Route, Routes} from "react-router";
import MainPage from "../pages/MainPage/ui/MainPage";
import ProfilePage from "../pages/ProfilePage/ui/ProfilePage";

const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Link to={'/'}>main</Link>
                <Link to={'/profile'}>profile</Link>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;