import { useRef, useState } from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { Button } from "@component";
import { NavItem } from "@component/Nav";
import { useOutsideClick } from "@hook";
import db from "@db";

export default function Nav() {
    const [state, setState] = useState({
        isNav: false,
        data: db.nav,
    });
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

    const fOpenNav = () => setState({ ...state, isNav: true });
    const fCloseNav = () => setState({ ...state, isNav: false });

    useOutsideClick([ref], state.isNav, fCloseNav);

    return (
        <div className="flex-none relative" ref={ref}>
            <div className="lg:hidden">
                {state.isNav ? (
                    <Button Icon={FaTimes} onClick={fCloseNav} />
                ) : (
                    <Button Icon={FaEllipsisV} onClick={fOpenNav} />
                )}
            </div>

            <div
                className={`lg:px-0 lg:py-0 lg:w-max lg:h-8 lg:relative lg:top-auto lg:right-auto lg:flex lg:flex-row items-center gap-2 transition-all lg:bg-transparent lg:border-none lg:rounded-none lg:shadow-none ${
                    state.isNav
                        ? "px-8 py-4 w-max h-max absolute top-[calc(100%+1rem)] right-0 z-10 flex flex-col bg-white border border-gray-200 rounded-md shadow-md"
                        : "hidden"
                }`}
            >
                {state.data.map((item) => (
                    <NavItem {...item} key={item.name} />
                ))}
            </div>
        </div>
    );
}
