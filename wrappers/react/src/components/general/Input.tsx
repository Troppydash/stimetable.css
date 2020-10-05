import * as React from "react";
import { combiner, optionalClassName } from "../../helpers/classNameHelper";

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    primary?: boolean,
    secondary?: boolean,
    big?: boolean,
    small?: boolean,
    medium?: boolean,
}

export function createInputComponent(prefix: string) {
    return ( props: React.PropsWithChildren<InputProps> ) => {
        const { children, primary, secondary, big, small, medium, ...rest } = props;
        return (
            <input className={combiner([
                prefix,
                optionalClassName(primary, prefix + '--primary'),
                optionalClassName(secondary, prefix + '--secondary'),
                optionalClassName(big, prefix + '--big'),
                optionalClassName(medium, prefix + '--medium'),
                optionalClassName(small, prefix + '--small'),
            ])} {...rest}/>
        )
    }
}


export default React.memo( createInputComponent("st-input") );
