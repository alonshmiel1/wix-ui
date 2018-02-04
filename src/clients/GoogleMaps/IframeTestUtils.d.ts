export declare const getIframes: () => NodeListOf<HTMLIFrameElement>;
export declare const getIframeWithLangAndApiKey: (lang: any, apiKey: any) => HTMLIFrameElement;
export declare const isIframeVisible: (iframe: any) => boolean;
export declare const triggerIframeInitAutocomplete: (mockedGoogleInstance: any, lang: any, apiKey: any) => void;
export declare const GoogleMapsMock: (autocompleteInstance?: any, geocoderInstance?: any, placesServiceInstance?: any) => {
    maps: {
        Map: () => {};
        places: {
            AutocompleteService: () => any;
            PlacesService: () => any;
            PlacesServiceStatus: {
                OK: string;
                ZERO_RESULTS: string;
            };
            AutocompleteServiceStatus: {
                OK: string;
                ERROR: string;
                ZERO_RESULTS: string;
            };
        };
        Geocoder: () => any;
        GeocoderStatus: {
            OK: string;
            ZERO_RESULTS: string;
        };
    };
};
export declare class EventEmitterMock {
    eventListeners: any[];
    addEventListener(eventName: any, callback: any): void;
    triggerMessage(event: any): void;
}
