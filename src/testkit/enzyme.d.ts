import { WrapperData } from 'wix-ui-test-utils';
export declare const toggleSwitchTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    click: () => void;
    isChecked: () => any;
    isDisabled: () => any;
    getToggleIcon: () => any;
    getId: () => any;
    getRootStyles: () => CSSStyleDeclaration;
    getOuterLabelStyles: () => CSSStyleDeclaration;
    getInnerLabelStyles: () => CSSStyleDeclaration;
    getToggleIconStyles: () => CSSStyleDeclaration;
    styles: {
        getRootDisplay: () => string;
        getBorderRadius: () => string;
    };
};
export declare const stylableToggleSwitchTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    click: () => void;
    isChecked: () => any;
    isDisabled: () => any;
    getToggleIcon: () => any;
    getId: () => any;
    getRootStyles: () => CSSStyleDeclaration;
    getOuterLabelStyles: () => CSSStyleDeclaration;
    getInnerLabelStyles: () => CSSStyleDeclaration;
    getToggleIconStyles: () => CSSStyleDeclaration;
};
export declare const buttonTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    click: () => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    getType: () => any;
    getTextContent: () => any;
    isDisabled: () => boolean;
    styles: {
        getMinWidth: () => string;
        getWidth: () => string;
        getHeight: () => string;
        getPadding: () => string;
        getBorderRadius: () => string;
    };
};
export declare const inputTestkitFactory: (obj: WrapperData) => any;
export declare const textTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    isEllipsis: () => boolean;
    hasTitleAttribute: () => boolean;
    getFontFamily: () => string;
};
export declare const badgeTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    getContentText: () => any;
};
export declare const tooltipTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    isTargetElementExists: () => boolean;
    isContentExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    styles: {
        getBackgroundColor: () => string;
        getBorderWidth: () => string;
        getBorderStyle: () => string;
        getBorderColor: () => string;
        getBorderRadius: () => string;
        getContentPadding: () => string;
    };
};
export declare const paginationTestkitFactory: (obj: WrapperData) => {
    root: any;
    exists: () => boolean;
    simulate: any;
    getPageStrip: () => any;
    getPages: () => Element[];
    getPageLabels: () => string[];
    getPageByIndex: (idx?: number) => Element;
    getPageByNumber: (n: number) => Element;
    getCurrentPage: () => Element;
    getNavButton: (name: "first" | "previous" | "next" | "last") => Element;
    getPageInput: () => HTMLInputElement;
    getTotalPagesField: () => Element;
    clickNavButton: (name: "first" | "previous" | "next" | "last") => void;
    clickPage: (page: number) => void;
    changeInput: (newValue: string) => void;
    commitInput: () => void;
    blurInput: () => void;
};
export declare const dividerTestkitFactory: (obj: WrapperData) => {
    exists: () => boolean;
    isVertical: () => boolean;
    textContent: () => any;
    element: any;
};
export declare const checkboxTestkitFactory: (obj: WrapperData) => {
    element: () => any;
    exists: () => boolean;
    click: () => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    focus: () => any;
    getType: () => any;
    isChecked: () => boolean;
    getTextContent: () => any;
    children: () => any;
    tickmark: () => any;
    indeterminateMark: () => any;
    isIndeterminate: () => boolean;
    input: () => any;
    isDisabled: () => boolean;
    styles: {
        getMinWidth: () => string;
        getWidth: () => string;
        getHeight: () => string;
        getPadding: () => string;
        getBorderRadius: () => string;
    };
};
