export declare type BadgeState = Partial<{
    color: string;
    backgroundColor: string;
    borderColor: string;
}>;
export declare type BadgeTheme = Partial<BadgeState & {
    display: string;
    minWidth: string;
    width: string;
    height: string;
    lineHeight: string;
    padding: string;
    contentPadding: string;
    borderRadius: string;
    border: string;
    cursor: string;
    textAlign: string;
    verticalAlign: string;
}>;
export declare const core: BadgeTheme;
