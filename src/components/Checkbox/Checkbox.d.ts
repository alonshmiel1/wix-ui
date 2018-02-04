/// <reference types="react" />
import * as React from 'react';
export interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    checked: boolean;
}
export interface OnClickEvent extends React.MouseEvent<HTMLDivElement> {
    checked: boolean;
}
export interface OnKeydownEvent extends React.KeyboardEvent<HTMLDivElement> {
    checked: boolean;
}
export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.EventHandler<OnChangeEvent | OnClickEvent | OnKeydownEvent>;
    id?: string;
    tabIndex?: number;
    tickIcon?: React.ReactNode;
    indeterminateIcon?: React.ReactNode;
    children?: React.ReactNode;
    error?: boolean;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    indeterminate?: boolean;
    autoFocus?: boolean;
    ['aria-controls']?: string[];
}
export interface CheckboxState {
    isFocused: boolean;
}
/**
 * Checkbox
 */
export default class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {
    static displayName: string;
    static propTypes: Object;
    static defaultProps: Partial<CheckboxProps>;
    id: string;
    private checkbox;
    constructor(props: CheckboxProps);
    private handleKeydown;
    private handleClick;
    private handleChange;
    private handleInputClick;
    private handleInputBlur;
    private handleInputFocus;
    render(): JSX.Element;
}
