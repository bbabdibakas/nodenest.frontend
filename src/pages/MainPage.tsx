import {AppInput} from "../components/AppInput/AppInput";
import {useState} from "react";

const MainPage = () => {
    const [value, setValue] = useState('')

    const onChangeValue = (value: string) => {
        setValue(value)
    }

    return (
        <div className="page">
            <AppInput value={value} onChange={onChangeValue} placeholder={'Username'}/>
        </div>
    )
}

export default MainPage;