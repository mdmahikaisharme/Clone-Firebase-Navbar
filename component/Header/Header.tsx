import { useContext } from "react";
import { HeaderLogo } from "@component/Header";
import { Language, Nav, Search, User } from "@component";
import { SidebarToggler } from "@component/Sidebar";
import { AppContext } from "@context/App";

export default function Header() {
    const appContext = useContext(AppContext);

    return (
        <header className="w-screen h-12 px-2 sm:px-4 sticky top-0 left-0 flex items-center gap-2 md:gap-4 bg-white border-b border-b-gray-200 z-10">
            <div className="flex-none flex items-center gap-2 md:gap-4">
                <SidebarToggler />
                <HeaderLogo />
            </div>

            <div
                className={`grow flex flex-row-reverse lg:flex-row items-center lg:justify-between gap-2 md:gap-4 transition-all ${
                    appContext.isSearch ? `md:relative` : `relative`
                }`}
            >
                <Nav />
                <Search />
            </div>

            <div className="flex-none flex items-center gap-2 md:gap-4">
                <Language />
                <User />
            </div>
        </header>
    );
}
