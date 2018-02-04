export declare const styles: (theme: Partial<{
    rootWidth: string;
    rootHeight: string;
    transitionSpeed: string;
    borderRadius: string;
    innerLabelBorderRadius: string;
    labelMovementRange: string;
    outerLabelWidth: string;
    outerLabelHeight: string;
    innerLabelWidth: string;
    innerLabelHeight: string;
    innerLabelBackgroundColor: string;
    innerLabelBackgroundColorChecked: string;
    innerLabelBackgroundColorDisabled: string;
    innerLabelBackgroundColorHover: string;
    innerLabelBackgroundColorHoverChecked: string;
    backgroundColor: string;
    backgroundColorChecked: string;
    backgroundColorDisabled: string;
    backgroundColorHover: string;
    backgroundColorHoverChecked: string;
    backgroundColorFocus: string;
    focusOutline: string;
    color: string;
    colorChecked: string;
    colorDisabled: string;
    colorCheckedDisabled: string;
    colorHover: string;
    colorHoverChecked: string;
    colorFocus: string;
    toggleIconWidth: string;
    toggleIconHeight: string;
    toggleIconDisplay: string;
    outerLabelBorderSize: number;
    outerLabelBorderSizeChecked: number;
    outerLabelBorderSizeDisabled: number;
    outerLabelBorderSizeHover: number;
    outerLabelBorderSizeHoverChecked: number;
    outerLabelBorderColor: string;
    outerLabelBorderColorChecked: string;
    outerLabelBorderColorDisabled: string;
    outerLabelBorderColorHover: string;
    outerLabelBorderColorHoverChecked: string;
    innerLabelBorderSize: number;
    innerLabelBorderSizeChecked: number;
    innerLabelBorderSizeDisabled: number;
    innerLabelBorderSizeHover: number;
    innerLabelBorderSizeHoverChecked: number;
    innerLabelBorderColor: string;
    innerLabelBorderColorChecked: string;
    innerLabelBorderColorDisabled: string;
    innerLabelBorderColorHover: string;
    innerLabelBorderColorHoverChecked: string;
    innerLabelBoxShadow: string;
    outerLabelBoxShadow: string;
}>) => {
    root: {
        [x: string]: string | {
            display: string;
            outline?: undefined;
        } | {
            [x: string]: {
                backgroundColor: string;
                borderWidth: number;
                borderColor: string;
                left?: undefined;
                & > $toggleIcon?: undefined;
            } | {
                backgroundColor: string;
                borderWidth: number;
                borderColor: string;
                left: string;
                '& > $toggleIcon': {
                    transition: string;
                    '& path': {
                        fill: string;
                    };
                };
            };
            display?: undefined;
            outline?: undefined;
        } | {
            [x: string]: {
                backgroundColor: string;
                cursor: string;
                borderWidth: number;
                borderColor: string;
                fill?: undefined;
            } | {
                fill: string;
                backgroundColor?: undefined;
                cursor?: undefined;
                borderWidth?: undefined;
                borderColor?: undefined;
            };
            display?: undefined;
            outline?: undefined;
        } | {
            [x: string]: {
                backgroundColor: string;
                borderWidth: number;
                borderColor: string;
                fill?: undefined;
            } | {
                fill: string;
                backgroundColor?: undefined;
                borderWidth?: undefined;
                borderColor?: undefined;
            };
            display?: undefined;
            outline?: undefined;
        } | {
            outline: string;
            display?: undefined;
        };
        display: string;
        alignItems: string;
        width: string;
        height: string;
        position: string;
        outline: string;
        '& > input[type=checkbox]': {
            display: string;
        };
    };
    outerLabel: {
        display: string;
        width: string;
        height: string;
        cursor: string;
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderStyle: string;
        boxSizing: string;
        boxShadow: string;
        '-webkit-border-radius': any;
        '-moz-border-radius': any;
        borderRadius: any;
        transition: string;
    };
    innerLabel: {
        display: string;
        width: string;
        height: string;
        position: string;
        left: string;
        zIndex: number;
        textAlign: string;
        alignItems: string;
        justifyContent: string;
        cursor: string;
        backgroundColor: string;
        boxShadow: string;
        top: string;
        transform: string;
        borderWidth: number;
        borderColor: string;
        borderStyle: string;
        boxSizing: string;
        '-webkit-border-radius': any;
        '-moz-border-radius': any;
        borderRadius: any;
        transition: string;
    };
    toggleIcon: {
        display: string;
        width: string;
        height: string;
        transition: string;
        '& path': {
            fill: string;
        };
    };
};
