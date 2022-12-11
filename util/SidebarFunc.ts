import { useContext } from "react";
import { AppContext } from "@context/App";

export default function SidebarFunc() {
    const appContext = useContext(AppContext);

    const fOpenSidebar = () => {
        appContext.dispatch({ type: "SET_SIDEBAR", payload: true });
    };
    const fCloseSidebar = () => {
        appContext.dispatch({ type: "SET_SIDEBAR", payload: false });
    };
    const fOpenDropdown = () => {
        appContext.dispatch({ type: "SET_SIDEBAR_DROPDOWN", payload: true });
    };
    const fCloseDropdown = () => {
        appContext.dispatch({ type: "SET_SIDEBAR_DROPDOWN", payload: false });
    };
    const fCloseAll = () => {
        fCloseSidebar();
        fCloseDropdown();
    };
    const fSetSidebarTooglerRef = (ref: any) => {
        appContext.dispatch({ type: "SET_SIDEBAR_TOGGLER_REF", payload: ref });
    };

    return {
        fOpenSidebar,
        fCloseSidebar,
        fOpenDropdown,
        fCloseDropdown,
        fCloseAll,
        fSetSidebarTooglerRef,
    };
}
