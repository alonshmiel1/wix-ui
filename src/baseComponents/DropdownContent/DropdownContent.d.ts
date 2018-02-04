/// <reference types="react" />
import * as React from 'react';
import { Option } from '../DropdownOption';
export interface DropdownContentProps {
    /** Component class name */
    className?: string;
    /** The dropdown options array */
    options: Array<Option>;
    /** A callback for when clicking an option */
    onOptionClick: (option: Option) => void;
    /** Array of the selected ids */
    selectedIds: Array<string | number>;
    /** An element that always appears at the top of the options */
    fixedHeader?: React.ReactNode;
    /** An element that always appears at the bottom of the options */
    fixedFooter?: React.ReactNode;
    /** Maximum height of the component */
    maxHeight?: number;
}
export interface DropdownContentState {
    hoveredIndex: number;
}
/**
 * DropdownContent
 */
export declare class DropdownContent extends React.PureComponent<DropdownContentProps, DropdownContentState> {
    static displayName: string;
    static defaultProps: {
        maxHeight: number;
    };
    private optionsContainerRef;
    constructor(props: any);
    onOptionClick(option: Option): void;
    setHoveredIndex(index: number): void;
    isValidOptionForSelection(option: Option): boolean;
    hoverNextItem(interval: number): boolean;
    onKeyDown(evt: React.KeyboardEvent<HTMLElement>): boolean;
    render(): JSX.Element;
}
