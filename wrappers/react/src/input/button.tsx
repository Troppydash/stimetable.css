import * as React from 'react';
import { combiner, optionalClassName } from "../helpers/classNameHelper";

// TODO: Size
export type Props = {
    primary?: boolean,
    secondary?: boolean,
};

export function Button( props: React.PropsWithChildren<Props> ) {
    const { primary, secondary } = props;
    return (
        <button className={combiner( [
            'st-button',
            optionalClassName( primary, 'st-button--primary' ),
            optionalClassName( secondary, 'st-button--secondary' ),
        ] )}>
            {props.children}
        </button>
    )
}

