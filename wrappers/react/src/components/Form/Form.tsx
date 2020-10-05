import * as React from 'react';
import { combiner, optionalClassName } from "../../helpers/classNameHelper";
import { createInputComponent } from "../Input/Input";
import Text, { TextProps } from "../Text/Text";
import { createSelectComponent } from "../Select";
import { ButtonProps, createButtonComponent } from "../Button";

/// Form ///
export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {

}

function Form( props: React.PropsWithChildren<FormProps> ) {
    const { children, className, ...rest } = props;
    return (
        <form className={combiner( [
            'st-form',
            optionalClassName( className )
        ] )} {...rest}>
            {children}
        </form>
    )
}

export default React.memo( Form );

/// Form Control ///
export interface ControlProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    small?: boolean,
    big?: boolean,
}

function control( props: React.PropsWithChildren<ControlProps> ) {
    const { children, small, big, className, ...rest } = props;
    return (
        <div className={combiner( [
            "st-form__control",
            optionalClassName( small, "st-form__control--small" ),
            optionalClassName( big, "st-form__control--big" ),
            optionalClassName( className )
        ] )} {...rest}>
            {children}
        </div>
    )
}

export const Control = React.memo( control );

/// Form Label ///
export interface LabelProps extends TextProps {
    name: string,
    multi?: boolean,
    settings?: boolean,
}

function label( props: React.PropsWithChildren<LabelProps> ) {
    const { children, name, multi, settings, ...rest } = props;
    // Have to cast to any coz react doo-doo
    const restAs = rest as any;
    return (
        <label className={combiner( [
            "st-form__label",
            optionalClassName( multi, "st-form__label--multi" ),
            optionalClassName( settings, "st-form__label--settings" ),
        ] )}>
            <Text inline {...restAs}>{name}</Text>
            {children}
        </label>
    )
}

export const Label = React.memo( label );

/// Form Input ///
export const Input = React.memo( createInputComponent( "st-form__input" ) );

/// Form Select ///
export const Select = React.memo( createSelectComponent( "st-form__select" ) );

export { Option } from '../Select';

/// Form Submit ///
const SubmitButton = createButtonComponent( 'st-form__submit' );

function submit( props: React.PropsWithChildren<ButtonProps> ) {
    return (
        <SubmitButton type="submit" {...props} />
    )
}

export const Submit = React.memo( submit );
