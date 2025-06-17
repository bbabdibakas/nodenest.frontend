import {Link, Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

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