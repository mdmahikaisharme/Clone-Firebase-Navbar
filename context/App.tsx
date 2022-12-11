import { createContext, ReactNode, useEffect, useReducer } from "react";
import { iAppContext, tAppReducerAction } from "@type/context/App.d";
import { styleMedia } from "@util";

const AppState: iAppContext = {
    path: "",
    lang: "English",
    isSidebar: false,
    isSidebarDropdown: false,
    sidebarTogglerRef: {},
    isSearch: false,
    dispatch: (action: tAppReducerAction) => null,
};
const AppContext = createContext<iAppContext>(AppState);

function AppReducer(
    state: iAppContext,
    action: tAppReducerAction
): iAppContext {
    switch (action.type) {
        case "SET_SIDEBAR": {
            return { ...state, isSidebar: action.payload };
        }
        case "SET_SIDEBAR_DROPDOWN": {
            return { ...state, isSidebarDropdown: action.payload };
        }
        case "SET_SIDEBAR_TOGGLER_REF": {
            return { ...state, sidebarTogglerRef: action.payload };
        }
        case "SET_SEARCH": {
            return { ...state, isSearch: action.payload };
        }
        case "SET_LANGUAGE": {
            return { ...state, lang: action.payload };
        }
        case "-": {
            return { ...state };
        }
        default: {
            return state;
        }
    }
}

function AppContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(AppReducer, AppState);

    // SIDEBAR OPEN || CLOSE
    useEffect(() => {
        const isSidebar = window.innerWidth <= styleMedia.md ? false : true;
        dispatch({ type: "SET_SIDEBAR", payload: isSidebar });
    }, []);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
