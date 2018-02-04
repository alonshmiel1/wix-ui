/// <reference types="react" />
import * as React from 'react';
import { GoogleMapsIframeClient } from '../../src/clients/GoogleMaps';
export declare class GoogleMapsIframeClientStory extends React.Component<{}, {
    inputValue: string;
    result: object[];
}> {
    state: {
        result: any[];
        inputValue: string;
    };
    client: GoogleMapsIframeClient;
    constructor();
    updateInputValue(evt: any): void;
    autocomplete(apiKey: any, lang: any): void;
    geocode(apiKey: any, lang: any): void;
    placeDetails(apiKey: any, lang: any): void;
    render(): JSX.Element;
}
