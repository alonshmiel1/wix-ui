/// <reference types="react" />
import * as React from 'react';
export interface Option {
    id: number | string;
    isDisabled: boolean;
    isSelectable: boolean;
    value: string;
    render: () => React.ReactNode;
}
export declare enum OptionType {
    Simple = 0,
}
export declare const OptionFactory: {
    create(id: React.ReactText, isDisabled: boolean, isSelectable: boolean, value: string, type?: OptionType): Option;
    createDivider(value?: string): Option;
    createCustomDivider(divider: React.ReactElement<any>): Option;
    createHighlighted(option: Option, hightlightValue: string): Option;
};
