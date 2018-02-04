/// <reference types="react" />
import * as React from 'react';
export declare type ToggleSwitchClasses = {
    root: string;
    outerLabel: string;
    innerLabel: string;
    toggleIcon: string;
};
export declare type ToggleSwitchStyles = {
    root?: object;
    outerLabel?: object;
    innerLabel?: object;
    toggleIcon?: object;
};
export interface ToggleSwitchProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    classes?: ToggleSwitchClasses;
    styles?: ToggleSwitchStyles;
    id?: string;
    previewState?: string;
}
declare const _default: any;
export default _default;
