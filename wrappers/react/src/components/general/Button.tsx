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
function Button( props: React.PropsWithChildren<ButtonProps> ) {
    const { primary, secondary, big, medium, small, children, ...rest } = props;
    return (
        <button className={combiner( [
            'st-button',
            optionalClassName( primary, 'st-button--primary' ),
            optionalClassName( secondary, 'st-button--secondary' ),
            optionalClassName( big, 'st-button--big' ),
            optionalClassName( medium, 'st-button--medium' ),
            optionalClassName( small, 'st-button--small' ),
        ] )} {...rest}>
            {children}
        </button>
    )
}

export default React.memo(Button);

