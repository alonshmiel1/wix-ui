/// <reference types="react" />
import * as React from 'react';
export declare type ToggleSwitchStyles = {
    root?: object;
    outerLabel?: object;
    innerLabel?: object;
    toggleIcon?: object;
};
export interface ToggleSwitchProps {
    checked?: boolean;
    disabled?: boolean;
    onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    styles?: ToggleSwitchStyles;
    id?: string;
}
/**
 * Toggle Switch
 */
export declare class ToggleSwitch<P = {}> extends React.PureComponent<ToggleSwitchProps & P> {
    static displayName: string;
    id: string;
    private toggle;
    static propTypes: {
        checked: any;
        onChange: any;
        disabled: any;
        styles: any;
        id: any;
    };
    static defaultProps: {
        checked: boolean;
        styles: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    _listenToSpace: (e: any) => void;
    _handleChange: (e: any) => void;
    render(): JSX.Element;
}
