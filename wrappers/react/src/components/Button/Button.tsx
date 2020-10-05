import * as React from 'react';
import { combiner, optionalClassName } from "../../helpers/classNameHelper";

// TODO: Override classNameProp
/// Button Props
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    primary?: boolean,
    secondary?: boolean,

    big?: boolean,
    medium?: boolean,
    small?: boolean,
}

/// Styled Button
export function createButtonComponent( prefix: string ) {
    return ( props: React.PropsWithChildren<ButtonProps> ) => {
        const { primary, secondary, big, medium, small, children, className, ...rest } = props;
        return (
            <button className={combiner( [
                prefix,
                optionalClassName( primary, prefix + '--primary' ),
                optionalClassName( secondary, prefix + '--secondary' ),
                optionalClassName( big, prefix + '--big' ),
                optionalClassName( medium, prefix + '--medium' ),
                optionalClassName( small, prefix + '--small' ),
                optionalClassName( className )
            ] )} {...rest}>
                {children}
            </button>
        )
    }
}


export default React.memo( createButtonComponent( 'st-button' ) );

