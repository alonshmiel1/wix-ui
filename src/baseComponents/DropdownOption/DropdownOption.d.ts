/// <reference types="react" />
import * as React from 'react';
import { Option } from './';
export interface DropdownOptionProps {
    className: string;
    option: Option;
    index: number;
    hoveredIndex: string | number;
    selectedIds: Array<string | number>;
    onClickHandler: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnterHandler: React.MouseEventHandler<HTMLDivElement>;
}
export declare const DropdownOption: React.SFC<DropdownOptionProps>;
