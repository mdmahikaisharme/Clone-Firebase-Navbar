import Link from "next/link";
import { motion } from "framer-motion";
import { iDropdownItem } from "@type/component/Sidebar.d";
import { IconPicker, SidebarFunc } from "@util";

export default function DropdownItem(props: iDropdownItem) {
    const { fCloseAll } = SidebarFunc();
    const fOnClick = () => (props.href ? fCloseAll() : null);

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

function MainItem({ name, icon, onClick }: iDropdownItem) {
    return (
        <motion.div
            className={`py-1 pl-1 pr-3 flex items-center gap-2 text-gray-600 rounded-tr-full rounded-br-full cursor-pointer select-none hover:bg-gray-200 ${
                true
                    ? `relative after:content-[''] after:w-[2px] last:after:h-2/4 after:h-full after:absolute after:-left-4 after:top-0 after:bg-gray-200`
                    : ``
            } ${
                true
                    ? `relative before:content-[''] before:w-4 before:h-[2px] before:absolute before:-left-4 before:top-2/4 before:-translate-y-2/4 before:bg-gray-200`
                    : ``
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
        >
            <span className="flex-none w-4 h-4 grid place-items-center">
                <IconPicker icon={icon} />
            </span>

            <span>{name}</span>
        </motion.div>
    );
}
