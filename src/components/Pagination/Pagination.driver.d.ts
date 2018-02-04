export declare type NavButtonName = 'first' | 'previous' | 'next' | 'last';
export declare const paginationDriverFactory: ({ element: root, eventTrigger: simulate }: {
    element: any;
    eventTrigger: any;
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
    getNavButton: (name: NavButtonName) => Element;
    getPageInput: () => HTMLInputElement;
    getTotalPagesField: () => Element;
    clickNavButton: (name: NavButtonName) => void;
    clickPage: (page: number) => void;
    changeInput: (newValue: string) => void;
    commitInput: () => void;
    blurInput: () => void;
};
