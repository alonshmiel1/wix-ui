export declare const tooltipDriverFactory: (component: any) => {
    element: () => any;
    getElementText: () => any;
    getTooltipText: () => Promise<any>;
    isTooltipExists: () => any;
    onMouseOver: () => Promise<void>;
    onMouseLeave: () => Promise<void>;
};
