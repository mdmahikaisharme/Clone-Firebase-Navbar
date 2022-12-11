export interface iAppContext {
    path: string;
    lang: string;
    // Sidebar
    isSidebar: boolean;
    isSidebarDropdown: boolean;
    sidebarTogglerRef: object;
    // Search
    isSearch: boolean;
    dispatch: (action: tAppReducerAction) => any;
}

export type tAppReducerAction =
    | { type: "SET_SIDEBAR"; payload: boolean }
    | { type: "SET_SIDEBAR_DROPDOWN"; payload: boolean }
    | { type: "SET_SIDEBAR_TOGGLER_REF"; payload: object }
    | { type: "SET_SEARCH"; payload: boolean }
    | { type: "SET_LANGUAGE"; payload: string }
    | { type: "-"; payload: unknown };
