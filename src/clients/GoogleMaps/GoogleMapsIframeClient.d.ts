import { IframesManager } from './IframesManager/IframesManager';
export declare class GoogleMapsIframeClient {
    _iframesManager: IframesManager;
    _promisesMap: Map<any, any>;
    constructor();
    handleMessage: (event: any) => void;
    autocomplete(apiKey: any, lang: any, request: any): Promise<{}>;
    geocode(apiKey: any, lang: any, request: any): Promise<{}>;
    placeDetails(apiKey: any, lang: any, request: any): Promise<{}>;
}
