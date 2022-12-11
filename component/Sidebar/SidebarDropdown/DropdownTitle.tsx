import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { iDropdownTitleProps } from "@type/component/Sidebar.d";
import { IconPicker, SidebarFunc } from "@util";

export default function DropdownTitle(props: iDropdownTitleProps) {
    const { fCloseAll } = SidebarFunc();
    const fOnClick = () => {
        props.hasContent ? props.onClick() : fCloseAll();
    };

    return props.href ? (
        <Link href={props.href}>
            <a>
                <MainTitle {...props} onClick={fOnClick} />
            </a>
        </Link>
    ) : (
        <MainTitle {...props} onClick={fOnClick} />
    );
}

function MainTitle({ name, icon, hasContent, onClick }: iDropdownTitleProps) {
    return (
        <div
            className="py-1 pl-4 pr-3 flex items-center justify-between text-gray-600 rounded-tr-full rounded-br-full cursor-pointer select-none hover:bg-gray-100"
            onClick={onClick}
        >
            <div className="grow flex items-center gap-2">
                <span className="flex-none w-4 h-4 grid place-items-center">
                    <IconPicker icon={icon} />
                </span>

                <span className="grow font-bold">{name}</span>
            </div>

            {hasContent && <FaArrowDown className="flex-none text-xs" />}
        </div>
    );
}
