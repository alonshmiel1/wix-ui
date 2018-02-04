/// <reference types="react" />
import * as React from 'react';
import { PageStripLayout } from './page-strip-layout';
export interface PageStripClasses {
    pageStrip: string;
    pageStripInner: string;
    pageStripTemplate: string;
    pageButton: string;
    currentPage: string;
    gap: string;
}
export interface PageStripProps {
    id?: string;
    classes: PageStripClasses;
    totalPages: number;
    currentPage: number;
    maxPagesToShow: number;
    showFirstPage: boolean;
    showLastPage: boolean;
    responsive: boolean;
    pageUrl?: (pageNumber: number) => string;
    gapLabel: React.ReactNode;
    onPageClick: (event: React.MouseEvent<Element>, page: number) => void;
    onPageKeyDown: (event: React.KeyboardEvent<Element>, page: number) => void;
    updateResponsiveLayout: (callback: () => void) => void;
}
export interface PageStripState {
    responsiveLayout: PageStripLayout | null;
}
export declare class PageStrip extends React.Component<PageStripProps, PageStripState> {
    private responsiveLayoutIsFresh;
    constructor();
    componentDidMount(): void;
    componentWillReceiveProps(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private renderLayout(layout, isDummy);
    private isResponsive();
    private getLayout();
    private updateLayoutIfNeeded();
}
