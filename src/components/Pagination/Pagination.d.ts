/// <reference types="react" />
import * as React from 'react';
export interface PaginationClasses {
    root: string;
    navButton: string;
    navButtonFirst: string;
    navButtonPrevious: string;
    navButtonNext: string;
    navButtonLast: string;
    pageStrip: string;
    pageStripInner: string;
    pageStripTemplate: string;
    pageButton: string;
    currentPage: string;
    gap: string;
    pageForm: string;
    pageInput: string;
    totalPages: string;
    disabled: string;
}
export interface PaginationProps {
    totalPages: number;
    currentPage?: number;
    pageUrl?: (pageNumber: number) => string;
    onChange?: (event: {
        event: React.SyntheticEvent<Element>;
        page: number;
    }) => void;
    paginationMode?: 'pages' | 'input';
    showFirstLastNavButtons?: boolean;
    replaceArrowsWithText?: boolean;
    firstLabel?: React.ReactNode;
    previousLabel?: React.ReactNode;
    nextLabel?: React.ReactNode;
    lastLabel?: React.ReactNode;
    gapLabel?: React.ReactNode;
    slashLabel?: React.ReactNode;
    rtl?: boolean;
    width?: number;
    showFirstPage?: boolean;
    showLastPage?: boolean;
    showInputModeTotalPages?: boolean;
    responsive?: boolean;
    maxPagesToShow?: number;
    classes?: PaginationClasses;
    id?: string;
    updateResponsiveLayout?: (callback: () => void) => void;
}
declare const _default: any;
export default _default;
