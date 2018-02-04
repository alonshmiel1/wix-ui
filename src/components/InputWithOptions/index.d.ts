/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../../baseComponents/Popover';
import { Option } from '../../baseComponents/DropdownOption';
import { OPEN_TRIGGER_TYPE } from '../../baseComponents/Dropdown/constants';
import { InputProps } from '../Input';
export interface InputWithOptionsProps {
    /** The location to display the content */
    placement?: Placement;
    /** The dropdown options array */
    options: Array<Option>;
    /** Trigger type to open the content */
    openTrigger?: OPEN_TRIGGER_TYPE;
    /** Handler for when an option is selected */
    onSelect?: (option: Option) => void;
    /** Handler for when an option is deselected */
    onDeselect?: (option: Option) => void;
    /** initial selected option ids */
    initialSelectedIds?: Array<string | number>;
    /** Should close content on select */
    closeOnSelect?: boolean;
    /** An element that always appears at the top of the options */
    fixedHeader?: React.ReactNode;
    /** An element that always appears at the bottom of the options */
    fixedFooter?: React.ReactNode;
    /** Maximum height of the options */
    optionsMaxHeight?: number;
    /** Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list  */
    onManualInput?: (value: string) => void;
    /** Input prop types */
    inputProps?: InputProps;
}
/**
 * InputWithOptions
 */
export declare class InputWithOptions extends React.PureComponent<InputWithOptionsProps> {
    static displayName: string;
    static defaultProps: {
        openTrigger: any;
        placement: any;
        closeOnSelect: boolean;
        initialSelectedIds: any[];
        onSelect: () => any;
        onDeselect: () => any;
    };
    static propTypes: {
        placement: any;
        options: any;
        openTrigger: any;
        onSelect: any;
        onDeselect: any;
        initialSelectedIds: any;
        closeOnSelect: any;
        fixedHeader: any;
        fixedFooter: any;
        optionsMaxHeight: any;
        inputProps: any;
    };
    private dropdownRef;
    constructor();
    onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
