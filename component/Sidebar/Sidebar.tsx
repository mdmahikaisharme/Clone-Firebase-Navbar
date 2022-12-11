import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SidebarContent, SidebarSlide } from "@component/Sidebar";
import { iSidebarSlide } from "@type/component/Sidebar";
import { AppContext } from "@context/App";
import { useOutsideClick } from "@hook";
import { SidebarFunc, styleMedia } from "@util";

export default function Sidebar() {
    const appContext = useContext(AppContext);
    const [state, setState] = useState({
        isSidebar: appContext.isSidebar,
        content: {} as iSidebarSlide,
    });
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

    const { fOpenDropdown, fCloseAll } = SidebarFunc();
    const fSetContent = (content: iSidebarSlide) => {
        setState({ ...state, content });
        fOpenDropdown();
    };

    useOutsideClick(
        [ref, appContext.sidebarTogglerRef],
        state.isSidebar,
        () => window.innerWidth <= styleMedia.md && fCloseAll()
    );

    // getting appContext isSidebar
    useEffect(() => {
        setState({ ...state, isSidebar: appContext.isSidebar });
    }, [appContext.isSidebar]);

    return (
        <div
            className={`h-[calc(100vh-3rem)] fixed md:sticky left-0 top-12 z-[5] bg-white border-r border-r-gray-200 transition-all overflow-hidden ${
                appContext.isSidebar ? `w-[300px]` : `w-0`
            }`}
            ref={ref}
        >
            <motion.div
                className={`w-[300px] h-full flex`}
                initial={{ x: "0" }}
                animate={{
                    x: appContext.isSidebarDropdown ? "-100%" : "0",
                }}
            >
                <SidebarContent
                    className="min-w-[300px] h-full scrollY"
                    setContent={fSetContent}
                />

                <div className="min-w-[300px] h-full scrollY">
                    <SidebarSlide {...state.content} />
                </div>
            </motion.div>
        </div>
    );
}
