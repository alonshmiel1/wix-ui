/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../Popover';
import { Option } from '../DropdownOption';
import { OPEN_TRIGGER_TYPE } from './constants';
export interface DropdownProps {
    /** The location to display the content */
    placement: Placement;
    /** Should display arrow with the content */
    showArrow?: boolean;
    /** render function that renders the target element with the state */
    children: React.ReactNode;
    /** The dropdown options array */
    options: Array<Option>;
    /** Trigger type to open the content */
    openTrigger: OPEN_TRIGGER_TYPE;
    /** Handler for when an option is selected */
    onSelect: (option: Option) => void;
    /** Handler for when an option is deselected */
    onDeselect: (option: Option) => void;
    /** initial selected option ids */
    initialSelectedIds: Array<string | number>;
    /** Should close content on select */
    closeOnSelect: boolean;
    /** An element that always appears at the top of the options */
    fixedHeader?: React.ReactNode;
    /** An element that always appears at the bottom of the options */
    fixedFooter?: React.ReactNode;
    /** Maximum height of the options */
    optionsMaxHeight?: number;
}
export interface DropdownState {
    isOpen: boolean;
    selectedIds: Array<string | number>;
}
/**
 * Dropdown
 */
export declare class DropdownComponent extends React.PureComponent<DropdownProps, DropdownState> {
    static displayName: string;
    private dropdownContentRef;
    constructor(props: any);
    handleClickOutside(): void;
    open(): void;
    close(): void;
    onKeyDown(evt: React.KeyboardEvent<HTMLElement>): boolean;
    onOptionClick(option: Option): void;
    render(): JSX.Element;
}
export declare type DropdownType = React.ComponentClass<DropdownProps> & {
    getInstance: () => DropdownComponent;
};
export declare const Dropdown: DropdownType;
