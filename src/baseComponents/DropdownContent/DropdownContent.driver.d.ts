import { ComponentFactory } from 'wix-ui-test-utils';
import { DropdownContent } from './';
export declare const dropdownContentDriverFactory: ({ element, componentInstance, eventTrigger }: ComponentFactory<DropdownContent>) => {
    exists: () => boolean;
    onKeyDown: (key: any) => boolean;
    optionAt: (index: any) => {
        click: () => any;
        isHovered: () => boolean;
    };
};
