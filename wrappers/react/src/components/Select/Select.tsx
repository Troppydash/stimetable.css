import * as React from 'react';
import { combiner, optionalClassName } from "../../helpers/classNameHelper";

/// Select Props
export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    primary?: boolean,
    secondary?: boolean,

    big?: boolean,
    medium?: boolean,
    small?: boolean,
}

/// Styled Select
export function createSelectComponent(prefix: string) {
    return ( props: React.PropsWithChildren<SelectProps> ) => {
        const { primary, secondary, big, medium, small, children, className, ...rest } = props;
        return (
            <select className={combiner( [
                prefix,
                optionalClassName( primary, prefix + '--primary' ),
                optionalClassName( secondary, prefix + '--secondary' ),
                optionalClassName( big, prefix + '--big'  ),
                optionalClassName( medium, prefix + '--medium'  ),
                optionalClassName( small, prefix + '--small'  ),
                optionalClassName( className )
            ] )} {...rest}>
                {children}
            </select>
        )
    }
}

export default React.memo( createSelectComponent('st-select') );

export interface OptionProps extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
}

/// Styled Select
function option( props: React.PropsWithChildren<OptionProps> ) {
    const { children, ...rest } = props;
    return (
        <option value={children as string} {...rest}>
            {children}
        </option>
    )
}

export const Option = React.memo( option );


