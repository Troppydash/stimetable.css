import * as React from 'react';
import { combiner, optionalClassName } from "../../helpers/classNameHelper";

/// Text Props
export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    primary?: boolean,
    secondary?: boolean,

    big?: boolean,
    medium?: boolean,
    small?: boolean,

    inline?: boolean,

    scaling?: number,
}

/// Styled Text
function Text( props: React.PropsWithChildren<TextProps> ) {
    const { primary, secondary, big, medium, small, children, inline, scaling, className, ...rest } = props;
    // TODO: This toggle might be costly
    return (
        <>{
            inline ? (
                <span className={combiner( [
                    'st-text',
                    optionalClassName( primary, 'st-text--primary' ),
                    optionalClassName( secondary, 'st-text--secondary' ),
                    optionalClassName( big, 'st-text--big' ),
                    optionalClassName( medium, 'st-text--medium' ),
                    optionalClassName( small, 'st-text--small' ),
                    optionalClassName( scaling, `st-text--${scaling}` ),
                    optionalClassName( className ),
                ] )} {...rest}>
                    {children}
                </span>
            ) : (
                <p className={combiner( [
                    'st-text',
                    optionalClassName( primary, 'st-text--primary' ),
                    optionalClassName( secondary, 'st-text--secondary' ),
                    optionalClassName( big, 'st-text--big' ),
                    optionalClassName( medium, 'st-text--medium' ),
                    optionalClassName( small, 'st-text--small' ),
                    optionalClassName( scaling, `st-text--${scaling}` ),
                    optionalClassName( className ),
                ] )} {...rest}>
                    {children}
                </p>
            )
        }</>
    )
}

export default React.memo( Text );
