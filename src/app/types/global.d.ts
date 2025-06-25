declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

const __IS_DEV__: boolean
const __API__: string