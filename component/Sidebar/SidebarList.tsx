import { LayoutGroup, motion } from "framer-motion";
import { iSidebarListProps } from "@type/component/Sidebar.d";

export default function SidebarList({ variant, children }: iSidebarListProps) {
    return (
        <motion.div
            className={`w-full py-2 pr-2 text-sm ${
                variant === "border" ? `border-b border-b-gray-200` : ``
            }`}
        >
            <LayoutGroup>{children}</LayoutGroup>
        </motion.div>
    );
}
