import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
    DropdownContent,
    DropdownTitle,
} from "@component/Sidebar/SidebarDropdown";
import { SidebarList } from "@component/Sidebar";
import { iSidebarDropdown } from "@type/component/Sidebar.d";

export default function SidebarDropdown({
    name,
    icon,
    href,
    content = [],
}: iSidebarDropdown) {
    const [isContent, setIsContent] = useState(false);
    const hasContent = content?.length > 0;

    return (
        <SidebarList variant="border">
            <DropdownTitle
                name={name}
                icon={icon}
                href={href}
                hasContent={hasContent}
                isContent={isContent}
                onClick={() => (hasContent ? setIsContent(!isContent) : null)}
            />

            {/* DROPDOWN CONTENT */}
            <AnimatePresence>
                {isContent && hasContent && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "fit-content", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <LayoutGroup>
                            {content?.map((item, index) => (
                                <DropdownContent {...item} key={index} />
                            ))}
                        </LayoutGroup>
                    </motion.div>
                )}
            </AnimatePresence>
        </SidebarList>
    );
}
