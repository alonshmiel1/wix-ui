export declare const inputTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    enterText: (text: any) => any;
    focus: () => any;
    getText: () => any;
};
export declare const buttonTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    click: () => any;
    getTextContent: () => any;
    isDisabled: () => boolean;
};
export declare const paginationTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getElementLocation: (dataHook: any) => Promise<{
        x: number;
        y: number;
    }>;
    getElementSize: (dataHook: any) => Promise<{
        width: number;
        height: number;
    }>;
    getPageList(): Promise<string[]>;
};
export declare const badgeTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTextContent: () => any;
};
export declare const toggleSwitchTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    click: () => any;
    isChecked: () => any;
    isDisabled: () => boolean;
};
export declare const tooltipTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getElementText: () => any;
    getTooltipText: () => Promise<any>;
    isTooltipExists: () => any;
    onMouseOver: () => Promise<void>;
    onMouseLeave: () => Promise<void>;
};
export declare const dividerTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    exists: () => boolean;
};
export declare const googleMapsIframeClientTestkitFactory: (obj: {
    dataHook: string;
}) => {
    getParsedResults: () => Promise<any>;
    getResultsElementWrapper: () => any;
    enterText: (text: any) => any;
    selectByValue: (value: any) => any;
    element: () => any;
};
export declare const inputWithOptionsTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    focusInput: () => any;
    enterText: (text: any) => any;
    getText: () => any;
    selectOption: (index: any) => any;
};
export declare const dropdownContentTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    selectOption: (index: any) => any;
};
export declare const dropdownTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    selectOption: (index: any) => any;
};
export declare const checkboxTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    click: () => any;
    isDisabled: () => boolean;
    isChecked: () => any;
};
