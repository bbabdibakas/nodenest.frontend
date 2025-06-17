import {ChangeEvent, InputHTMLAttributes} from 'react';
import * as styles from './AppInput.module.scss';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value: string
    placeholder: string
    hasError?: boolean
    onChange: (value: string) => void
}

export const AppInput = (props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        hasError,
        maxLength = 32,
        ...otherProps
    } = props

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.AppInput} ${hasError ? styles.hasError : undefined} ${className}`}
                value={value}
                onChange={onChangeValue}
                placeholder={placeholder}
                maxLength={maxLength}
                {...otherProps}
            />
            <div className={styles.placeholder}>
                {placeholder}
            </div>
        </div>
    )
}