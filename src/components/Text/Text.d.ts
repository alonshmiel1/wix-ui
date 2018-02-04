/// <reference types="react" />
import * as React from 'react';
export declare type TextClasses = {
    root: string;
    ellipsis: string;
};
export interface TextProps {
    classes?: TextClasses;
    children?: React.ReactNode;
    ellipsis?: boolean;
    forceHideTitle?: boolean;
    tagName?: string;
}
declare const _default: any;
export default _default;
