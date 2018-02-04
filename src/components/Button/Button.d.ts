/// <reference types="react" />
import * as React from 'react';
export declare type ButtonClasses = {
    button: string;
};
export interface ButtonProps {
    type?: string;
    disabled?: boolean;
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    onMouseEnter?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    onMouseLeave?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    classes?: ButtonClasses;
    children?: React.ReactNode;
}
declare const _default: any;
export default _default;
