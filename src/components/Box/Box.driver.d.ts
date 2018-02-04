import { ComponentFactory } from 'wix-ui-test-utils';
export declare const boxDriverFactory: ({ element }: ComponentFactory<any>) => {
    exists: () => boolean;
    getFlexDirection: () => string;
    getAlignment: () => string;
    getChildStyle: (idx: number) => CSSStyleDeclaration;
};
