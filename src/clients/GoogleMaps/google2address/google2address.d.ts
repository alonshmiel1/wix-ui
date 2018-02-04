export declare const includes: (arr: any, value: any) => boolean;
export declare function google2address(google: any): {
    formatted: any;
    formattedStreetAddress: string;
    latLng: {
        lat: any;
        lng: any;
    };
    approximate: boolean;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    street: string;
    number: string;
    postalCode: string;
    subpremise: string;
};
