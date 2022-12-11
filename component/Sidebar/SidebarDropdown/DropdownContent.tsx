import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
    DropdownItem,
    DropdownSubTitle,
} from "@component/Sidebar/SidebarDropdown";
import { iDropdownContent } from "@type/component/Sidebar.d";

export default function DropdownContent({
    name,
    icon,
    href,
    content = [],
}: iDropdownContent) {
    const [isContent, setIsContent] = useState(false);
    const hasContent = content?.length > 0;

    return (
        <>
            <DropdownSubTitle
                name={name}
                icon={icon}
                href={href}
                hasContent={hasContent}
                isContent={isContent}
                onClick={() => (hasContent ? setIsContent(!isContent) : null)}
            />

            {/* DROPDOWN ITEM */}
            <AnimatePresence>
                {isContent && hasContent && (
                    <motion.div
                        className={`ml-12 relative before:content-[''] before:w-4 before:h-[2px] before:absolute before:-left-8 before:top-0 before:bg-gray-200`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "fit-content", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <LayoutGroup>
                            {content?.map((item, index) => (
                                <DropdownItem {...item} key={index} />
                            ))}
                        </LayoutGroup>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
