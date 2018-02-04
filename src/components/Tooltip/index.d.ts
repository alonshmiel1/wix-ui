/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../../baseComponents/Popover';
import { ElementProps } from '../../utils';
export interface TooltipProps {
    /** The location to display the content */
    placement?: Placement;
}
export interface TooltipState {
    isOpen: boolean;
}
/**
 * Tooltip
 */
export declare class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
    static Element: React.SFC<ElementProps>;
    static Content: React.SFC<ElementProps>;
    static displayName: string;
    static defaultProps: {
        placement: string;
    };
    static propTypes: {
        placement: any;
    };
    constructor(props: any);
    open(): void;
    close(): void;
    render(): JSX.Element;
}
