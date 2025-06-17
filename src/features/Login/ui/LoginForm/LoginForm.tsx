import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {AppButton} from "shared/ui/AppButton/AppButton";
import * as styles from "./LoginForm.module.scss";
import {getLoginForm} from "../../model/selectors/getLoginForm";
import {getLoginFormValidateErrors} from "../../model/selectors/getLoginFormValidateErrors";
import {validateLoginForm} from "features/Login/model/services/validateLoginForm";
import {ValidateLoginFormError} from "features/Login/model/types/LoginState";

const LoginForm = () => {
    const dispatch = useDispatch();

    const form = useSelector(getLoginForm)
    const validateErrors = useSelector(getLoginFormValidateErrors)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    }

    const onLoginHandler = () => {
        const errors = validateLoginForm(form);
        dispatch(loginActions.setValidateLoginFormError(errors));
    }

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
        </div>
    )
}

export default LoginForm;