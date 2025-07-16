declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

const __IS_DEV__: boolean
const __API__: string

declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}