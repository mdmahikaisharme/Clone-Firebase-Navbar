import { useContext, useEffect, useRef } from "react";
import { FaArrowLeft, FaEllipsisV, FaTimes } from "react-icons/fa";
import { Button } from "@component";
import { AppContext } from "@context/App";
import { SidebarFunc } from "@util";

export default function SidebarToggler() {
    const appContext = useContext(AppContext);
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

    const {
        fOpenSidebar,
        fCloseSidebar,
        fCloseDropdown,
        fSetSidebarTooglerRef,
    } = SidebarFunc();

    useEffect(() => {
        fSetSidebarTooglerRef(ref);
    }, [ref]);

    return (
        <div ref={ref}>
            {appContext.isSidebarDropdown ? (
                <Button Icon={FaArrowLeft} onClick={fCloseDropdown} />
            ) : appContext.isSidebar ? (
                <Button Icon={FaTimes} onClick={fCloseSidebar} />
            ) : (
                <Button Icon={FaEllipsisV} onClick={fOpenSidebar} />
            )}
        </div>
    );
}
