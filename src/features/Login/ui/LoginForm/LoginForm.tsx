import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {getLoginFormUsername} from "../../model/selectors/getLoginFormUsername";
import {getLoginFormPassword} from "../../model/selectors/getLoginFormPassword";
import {loginActions} from "../../model/slice/loginSlice";

const LoginForm = () => {
    const dispatch = useDispatch();

    const username = useSelector(getLoginFormUsername)
    const password = useSelector(getLoginFormPassword)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    }

    return (
        <div>
            <div>
                Nodenest
            </div>
            <AppInput value={username} placeholder={'Username'} onChange={onChangeUsername}/>
            <AppInput value={password} placeholder={'Password'} onChange={onChangePassword}/>
        </div>
    )
}

export default LoginForm;