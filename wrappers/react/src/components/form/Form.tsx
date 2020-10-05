import * as React from 'react';
import { combiner, optionalClassName } from "../../helpers/classNameHelper";
import { createInputComponent } from "../general/Input";
import Text, { TextProps } from "../general/Text";

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {

}

function Form( props: React.PropsWithChildren<FormProps> ) {
    const { children, ...rest } = props;
    return (
        <form className="st-form" {...rest}>
            {children}
        </form>
    )
}

export default React.memo( Form );


export interface ControlProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    small?: boolean,
    big?: boolean,
}

function control( props: React.PropsWithChildren<ControlProps> ) {
    const { children, small, big, ...rest } = props;
    return (
        <div className={combiner( [
            "st-form__control",
            optionalClassName( small, "st-form__control--small" ),
            optionalClassName( big, "st-form__control--big" ),
        ] )} {...rest}>
            {children}
        </div>
    )
}

export const Control = React.memo( control );


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
        ] )} >
            <Text inline {...restAs}>{name}</Text>
            {children}
        </label>
    )
}

export const Label = React.memo( label );

export const Input = React.memo( createInputComponent("st-form__input") );
