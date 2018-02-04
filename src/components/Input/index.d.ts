/// <reference types="react" />
import * as React from 'react';
export interface InputProps {
    disabled?: boolean;
    autoComplete?: 'on' | 'off';
    autoFocus?: boolean;
    name?: string;
    onBlur?: React.EventHandler<React.FocusEvent<HTMLInputElement>>;
    onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    onFocus?: React.EventHandler<React.FocusEvent<HTMLInputElement>>;
    onClick?: React.EventHandler<React.MouseEvent<HTMLInputElement>>;
    onDoubleClick?: React.EventHandler<React.MouseEvent<HTMLInputElement>>;
    onKeyDown?: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
    onKeyUp?: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    type?: string;
    value?: string;
}
export interface InputState {
    id: string;
}
/**
 * Input
 */
export declare class Input extends React.Component<InputProps, InputState> {
    static displayName: string;
    static defaultProps: {
        type: string;
    };
    static propTypes: {
        value: any;
        disabled: any;
        autoComplete: any;
        autoFocus: any;
        name: any;
        onBlur: any;
        onChange: any;
        onClick: any;
        onDoubleClick: any;
        onFocus: any;
        onKeyDown: any;
        onKeyUp: any;
        placeholder: any;
        readOnly: any;
        required: any;
        tabIndex: any;
        type: any;
    };
    constructor(props: any);
    _onChange(e: any): void;
    render(): JSX.Element;
}
