import { useContext, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { SearchPopular, SearchResult } from "@component/Search";
import { AppContext } from "@context/App";
import { useOutsideClick } from "@hook";

export default function Search() {
    const appContext = useContext(AppContext);
    const [state, setState] = useState({
        search: "",
    });
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
    const refInput = useRef<HTMLInputElement>({} as HTMLInputElement);

    const fSetState = (key: string, value: any) => {
        setState({ ...state, [key]: value });
    };
    const fOpenSearch = () => {
        appContext.dispatch({ type: "SET_SEARCH", payload: true });
        setTimeout(() => refInput.current.focus(), 100);
    };
    const fCloseSearch = () => {
        appContext.dispatch({ type: "SET_SEARCH", payload: false });
    };

    useOutsideClick([ref], appContext.isSearch, fCloseSearch);

    return (
        <div
            className={`h-9 z-10 flex items-center gap-2  text-gray-600 transition-all ${
                appContext.isSearch
                    ? `w-[80%] md:w-full px-4 absolute left-2/4 md:right-0 -translate-x-2/4  rounded-tl-md rounded-tr-md bg-white border-l border-t border-r border-gray-200`
                    : `md:grow w-9 md:max-w-[800px] md:ml-4 lg:ml-0 xl:ml-16 px-3 rounded-full md:rounded-md shadow-sm md:bg-gray-100`
            }`}
            onClick={fOpenSearch}
            ref={ref}
        >
            <label className={`flex-none text-sm`}>
                <FaSearch />
            </label>
            <input
                className={`grow text-sm bg-transparent outline-none focus:border-b-2 focus:border-b-gray-200 ${
                    appContext.isSearch ? `block` : `hidden md:block`
                }`}
                placeholder="Search"
                type="text"
                value={state.search}
                onChange={(e) => fSetState("search", e.target.value)}
                ref={refInput}
            />

            {/* SEARCH CONTENT */}
            {appContext.isSearch && (
                <div className="w-[calc(100%-2rem)] h-max px-4 pb-4 absolute top-full right-2/4 translate-x-2/4 z-10 flex flex-col gap-4 bg-white border-l border-b border-r border-gray-200 rounded-bl-md rounded-br-md shadow-md transition-all box-content">
                    {state.search ? (
                        <SearchResult
                            data={state.search.toLocaleLowerCase()}
                            limit={5}
                        />
                    ) : (
                        <SearchPopular />
                    )}
                </div>
            )}
        </div>
    );
}
