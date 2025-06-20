import {LoginForm} from "features/Login";
import * as styles from './AuthPage.module.scss'

const AuthPage = () => {
    return (
        <div className="page">
            <div className={styles.AuthPage}>
                <LoginForm/>
            </div>
        </div>
    )
}

export default AuthPage;