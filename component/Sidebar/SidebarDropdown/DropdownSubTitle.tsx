import Link from "next/link";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";
import { iDropdownSubTitleProps } from "@type/component/Sidebar.d";
import { IconPicker, SidebarFunc } from "@util";

export default function DropdownSubTitle(props: iDropdownSubTitleProps) {
    const { fCloseAll } = SidebarFunc();
    const fOnClick = () => {
        props.hasContent ? props.onClick() : fCloseAll();
    };

    return props.href ? (
        <Link href={props.href}>
            <a>
                <MainSubTitle {...props} onClick={fOnClick} />
            </a>
        </Link>
    ) : (
        <MainSubTitle {...props} onClick={fOnClick} />
    );
}

function MainSubTitle({
    name,
    icon,
    hasContent,
    isContent,
    onClick,
}: iDropdownSubTitleProps) {
    return (
        <motion.div
            className={`ml-8 py-1 pl-1 pr-3 flex items-center gap-2 text-gray-600 rounded-tr-full rounded-br-full cursor-pointer select-none hover:bg-gray-200 ${`relative after:content-[''] after:w-[2px] after:h-full after:absolute after:-left-4 after:top-0 after:-translate-x-2/4 after:bg-gray-200`} ${
                !hasContent
                    ? `relative before:content-[''] before:w-4 before:h-[2px] before:absolute before:-left-4 before:top-2/4 before:-translate-y-2/4 before:bg-gray-200`
                    : ``
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClick()}
        >
            <span className="absolute -left-4 top-2/4 translate-x-2/4 -translate-y-2/4  flex-none w-2 h-2 grid place-items-center">
                {hasContent &&
                    (isContent ? (
                        <FaMinus className="text-[8px]" />
                    ) : (
                        <FaPlus className="text-[8px]" />
                    ))}
            </span>

            <span className="flex-none w-4 h-4 grid place-items-center">
                <IconPicker icon={icon} />
            </span>

            <span className="grow">{name}</span>
        </motion.div>
    );
}
