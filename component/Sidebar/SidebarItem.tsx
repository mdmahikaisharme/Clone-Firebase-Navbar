import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { iSidebarItem } from "@type/component/Sidebar.d";
import { IconPicker, SidebarFunc } from "@util";

export default function SidebarItem(props: iSidebarItem) {
    const { fCloseAll } = SidebarFunc();

    const fOnClick = () => {
        props.href ? fCloseAll() : props.onClick && props.onClick();
    };

    return props.href ? (
        <Link href={props.href}>
            <a>
                <MainItem {...props} onClick={fOnClick} />
            </a>
        </Link>
    ) : (
        <MainItem {...props} onClick={fOnClick} />
    );
}

function MainItem({ name, icon, active, more, onClick }: iSidebarItem) {
    return (
        <div
            className={`py-1 pl-4 pr-3 flex items-center justify-between rounded-tr-full rounded-br-full cursor-pointer select-none ${
                active
                    ? `text-blue-500 bg-blue-100`
                    : `text-gray-600 hover:bg-gray-100`
            }`}
            onClick={onClick}
        >
            <div className="grow flex items-center gap-2">
                <span className="flex-none w-4 h-4 grid place-items-center">
                    <IconPicker icon={icon} />
                </span>

                <span className="grow">{name}</span>
            </div>

            {more && <FaArrowRight className="flex-none text-xs" />}
        </div>
    );
}
