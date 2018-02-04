export declare type PageStripLayout = number[];
export declare function createStaticLayout({totalPages, currentPage, maxPagesToShow, showFirstPage, showLastPage}: {
    totalPages: number;
    currentPage: number;
    maxPagesToShow: number;
    showFirstPage: boolean;
    showLastPage: boolean;
}): PageStripLayout;
export declare function createResponsiveLayoutTemplate({totalPages, currentPage, maxPagesToShow}: {
    totalPages: number;
    currentPage: number;
    maxPagesToShow: number;
}): PageStripLayout;
export declare function createResponsiveLayout({container, totalPages, currentPage, maxPagesToShow, showFirstPage, showLastPage}: {
    container: Element;
    totalPages: number;
    currentPage: number;
    maxPagesToShow: number;
    showFirstPage: boolean;
    showLastPage: boolean;
}): PageStripLayout;
