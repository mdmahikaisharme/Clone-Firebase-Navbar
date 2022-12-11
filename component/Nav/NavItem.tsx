import { useRouter } from "next/router";
import { FaArrowDown } from "react-icons/fa";
import { NavDrop } from "@component/Nav";
import { iNavItem } from "@type/component/Nav.d";

export default function NavItem({ name, href, dropdown }: iNavItem) {
    const router = useRouter();
    const hasDropdown: boolean = dropdown.length > 0;

    const fOnClick = () => href && router.push(href);

    return (
        <div className={`relative group`}>
            <span
                className={`tab:px-2 tab:py-3 text-sm font-semibold flex items-center gap-2 text-gray-700 border-b-2 border-b-transparent cursor-pointer ${
                    "activeItem" === name
                        ? "border-b-gray-300"
                        : "hover:border-b-gray-300"
                }`}
                onClick={fOnClick}
            >
                {name}

                {hasDropdown && (
                    <FaArrowDown className="group-hover:-rotate-180 transition-all" />
                )}
            </span>

            {hasDropdown && <NavDrop data={dropdown} />}
        </div>
    );
}
