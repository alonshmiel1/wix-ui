export declare const tooltipDriverFactory: (args: any) => {
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
