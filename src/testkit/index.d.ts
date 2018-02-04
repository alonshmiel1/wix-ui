export declare const toggleSwitchTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
export declare const stylableToggleSwitchTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
export declare const buttonTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
export declare const inputTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isDisabled: () => any;
    isFocus: () => boolean;
    isReadOnly: () => any;
    getPlaceholder: () => any;
    getAutocomplete: () => any;
    isRequired: () => any;
    blur: () => any;
    click: () => any;
    doubleClick: () => any;
    focus: () => any;
    keyDown: () => any;
    keyUp: () => any;
    getTabIndex: () => any;
    getType: () => any;
    getValue: () => any;
    setValue: (value: any) => void;
};
export declare const textTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isEllipsis: () => boolean;
    hasTitleAttribute: () => boolean;
    getFontFamily: () => string;
};
export declare const paginationTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
export declare const badgeTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    getContentText: () => any;
};
export declare const tooltipTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
export declare const dividerTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isVertical: () => boolean;
    textContent: () => any;
    element: any;
};
export declare const checkboxTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
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
