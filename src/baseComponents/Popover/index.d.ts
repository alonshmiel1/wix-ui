/// <reference types="react" />
import * as React from 'react';
import PopperJS from 'popper.js';
export declare type Placement = PopperJS.Placement;
export declare const PlacementPropType: any;
export interface PopoverProps {
    /** The location to display the content */
    placement: Placement;
    /** Is the content shown or not */
    shown: boolean;
    /** onClick on the component */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** onMouseEnter on the component */
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    /** onMouseLeave on the component */
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    /** Show show arrow from the content */
    showArrow?: boolean;
}
export declare type PopoverType = React.SFC<PopoverProps> & {
    Element?: React.SFC;
    Content?: React.SFC;
};
/**
 * Popover
 */
export declare const Popover: PopoverType;
