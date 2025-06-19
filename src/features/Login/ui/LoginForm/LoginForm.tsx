import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {AppButton} from "shared/ui/AppButton/AppButton";
import * as styles from "./LoginForm.module.scss";
import {getLoginForm} from "../../model/selectors/getLoginForm";
import {getLoginFormValidateErrors} from "../../model/selectors/getLoginFormValidateErrors";
import {ValidateLoginFormError} from "../../model/types/LoginState";
import {loginByUsername} from "../../model/services/loginByUsername";
import {getLoginFormServerErrors} from "../../model/selectors/getLoginFormServerErrors";
import {getLoginFormIsLoading} from "../../model/selectors/getLoginFormIsLoading";

const LoginForm = () => {
    const dispatch = useDispatch();

    const form = useSelector(getLoginForm)
    const validateErrors = useSelector(getLoginFormValidateErrors)
    const serverErrors = useSelector(getLoginFormServerErrors)
    const isLoading = useSelector(getLoginFormIsLoading)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    }

    const onLoginHandler = () => {
        // @ts-expect-error fix later
        dispatch(loginByUsername())
    }

    if (isLoading) {
        return (
            <div className={styles.LoginForm}>
                Loading...
            </div>
        )
    } else {
        return (
            <div className={styles.LoginForm}>
                <div className={styles.title}>
                    Nodenest
                </div>
                <AppInput
                    value={form.username}
                    placeholder={'Username'}
                    hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_USERNAME)}
                    onChange={onChangeUsername}/>
                <AppInput
                    value={form.password}
                    placeholder={'Password'}
                    hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_PASSWORD)}
                    onChange={onChangePassword}/>
                <AppButton
                    className={styles.button}
                    onClick={onLoginHandler}
                >
                    Login
                </AppButton>
                {validateErrors?.map((error, index) => (
                    <div key={index} className={styles.error}>
                        {error}
                    </div>
                ))}
                {serverErrors?.map((error, index) => (
                    <div key={index} className={styles.error}>
                        {error}
                    </div>
                ))}
            </div>
        )
    }
}

export default LoginForm;