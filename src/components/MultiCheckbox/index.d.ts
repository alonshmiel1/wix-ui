/// <reference types="react" />
import * as React from 'react';
import { Option } from '../../baseComponents/DropdownOption';
export interface MultiCheckboxProps {
    /** The dropdown options array */
    options: Array<Option>;
    /** Handler for when an option is selected */
    onSelect?: (option: Option) => void;
    /** Handler for when an option is deselected */
    onDeselect?: (option: Option) => void;
}
export interface MultiCheckboxState {
    inputValue: string;
    displayedOptions: Array<Option>;
}
export declare class MultiCheckbox extends React.PureComponent<MultiCheckboxProps, MultiCheckboxState> {
    static displayName: string;
    static defaultProps: {
        onSelect: () => any;
        onDeselect: () => any;
    };
    static propTypes: {
        options: any;
        onSelect: any;
        onDeselect: any;
    };
    constructor(props: MultiCheckboxProps);
    onDeselect(option: Option): void;
    onSelect(option: Option): void;
    onInputChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
