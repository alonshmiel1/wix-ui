/// <reference types="react" />
import * as React from 'react';
import { Option } from '../../baseComponents/DropdownOption';
export interface GoogleInputProps {
    initialInputValue?: string;
    onSelect: (address: string) => void;
}
export interface GoogleInputState {
    inputValue: string;
}
export declare class GoogleInput extends React.PureComponent<GoogleInputProps, GoogleInputState> {
    constructor(props: GoogleInputProps);
    setValue(value: string): void;
    onInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onSelect(option: Option): void;
    render(): JSX.Element;
}
